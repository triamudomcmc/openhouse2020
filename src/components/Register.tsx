import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import QR from 'qrcode.react'
import { Form, Icon, Input, Button, Radio, Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import { FormComponentProps } from 'antd/lib/form'

import { Card } from './Card'
import { Wrapper } from './Wrapper'
import { ContentWrapper } from './Modal'
import { api } from '../lib/api'
import { Link } from './Nav/Common'

const CardTitle = styled.h1`
  text-align: left;
  font-weight: 700;
  line-height: 1.15;
`

const QRWrapper = styled.div`
  margin-top: 24px;
`

const { Option } = Select

interface IRegisterFormValue {
  prefix: string
  firstname: string
  lastname: string
  email: string
  type: string
  edlevel: string
}
interface IRegisterFormProps {
  submitToFirebase: (
    values: IRegisterFormValue,
    resetFields: (names?: Array<string>) => void
  ) => Promise<void>
}

export const RegisterForm = (
  props: FormComponentProps & IRegisterFormProps
) => {
  const { getFieldDecorator, validateFields } = props.form
  const [isEdLevelRequired, setIsEdLevelRequired] = useState(false)

  const handleTypeChange = (e: RadioChangeEvent) => {
    if (e.target.value === 'student') {
      setIsEdLevelRequired(true)
    } else {
      setIsEdLevelRequired(false)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.form.validateFields((err, values: IRegisterFormValue) => {
      if (!err) {
        props.submitToFirebase(values, props.form.resetFields)
      }
    })
  }

  useEffect(() => {
    validateFields(['edlevel'], { force: true })
  }, [isEdLevelRequired])

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <Form.Item label="คำนำหน้าชื่อ">
        {getFieldDecorator('prefix', {
          rules: [
            {
              required: true,
              message: 'โปรดเลือกใส่คำนำหน้าชื่อ'
            }
          ]
        })(
          <Radio.Group>
            <Radio.Button value="mister">นาย</Radio.Button>
            <Radio.Button value="miss">นางสาว</Radio.Button>
            <Radio.Button value="mrs">นาง</Radio.Button>
            <Radio.Button value="master">เด็กชาย</Radio.Button>
            <Radio.Button value="miss(child)">เด็กหญิง</Radio.Button>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item label="ชื่อ">
        {getFieldDecorator('firstname', {
          rules: [{ required: true, message: 'โปรดใส่ชื่อ' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="First name"
          />
        )}
      </Form.Item>
      <Form.Item label="นามสกุล">
        {getFieldDecorator('lastname', {
          rules: [{ required: true, message: 'โปรดใส่นามสกุล' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Last name"
          />
        )}
      </Form.Item>
      <Form.Item label="อีเมล">
        {getFieldDecorator('email', {
          rules: [
            {
              required: true,
              message: 'โปรดใส่อีเมล'
            }
          ]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="E-mail"
          />
        )}
      </Form.Item>
      <Form.Item label="สถานภาพ">
        {getFieldDecorator('type', {
          rules: [
            {
              required: true
            }
          ]
        })(
          <Radio.Group onChange={handleTypeChange}>
            <Radio.Button value="student">นักเรียน</Radio.Button>
            <Radio.Button value="parent">ผู้ปกครอง</Radio.Button>
            <Radio.Button value="teacher">ครู/อาจารย์</Radio.Button>
            <Radio.Button value="other">อื่น ๆ</Radio.Button>
          </Radio.Group>
        )}
      </Form.Item>
      {isEdLevelRequired && (
        <Form.Item label="ระดับการศึกษา">
          {getFieldDecorator('edlevel', {
            rules: [
              {
                required: isEdLevelRequired,
                message: 'โปรดเลือกระดับการศึกษา'
              }
            ],
            initialValue: ''
          })(
            <Select placeholder="ระดับการศึกษา">
              <Option value="primary">ประถมศึกษา</Option>
              <Option value="m1">มัธยมศึกษาปีที่ 1</Option>
              <Option value="m2">มัธยมศึกษาปีที่ 2</Option>
              <Option value="m3">มัธยมศึกษาปีที่ 3</Option>
              <Option value="highschool">มัธยมศึกษาตอนปลาย</Option>
              <Option value="other">อื่น ๆ</Option>
            </Select>
          )}
        </Form.Item>
      )}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(props.form.getFieldsError())}
        >
          Join Open House!
        </Button>
      </Form.Item>
    </Form>
  )
}

export const RegisterComponent = Form.create({ name: 'register' })(
  RegisterForm
) as any

export const Register = () => {
  const [key, setKey] = useState('')
  const submitToFirebase = async (
    values: IRegisterFormValue,
    resetForm: (names?: Array<string>) => void
  ) => {
    try {
      const res = await api.post(
        'https://asia-east2-triamudomoph2020.cloudfunctions.net/registration/register',
        {
          prefix: values.prefix,
          name: values.firstname,
          lastname: values.lastname,
          email: values.email,
          type: values.type,
          studentYear: values.edlevel ? values.edlevel : ''
        }
      )

      setKey(res.data)
      resetForm()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Wrapper>
      <Card width={400} minHeight={400} curved padding bg="white">
        <CardTitle>ลงทะเบียน</CardTitle>
        <ContentWrapper>
          {key === '' ? (
            <RegisterComponent submitToFirebase={submitToFirebase} />
          ) : (
            <div>
              <p>โปรดถ่ายภาพหน้าจอไว้เพื่อยืนยันในการเข้างาน</p>
              <QRWrapper>
                <QR value={key} id="qrcanvas" size={256} />
              </QRWrapper>
              <br />
              <Link
                onClick={() => {
                  setKey('')
                }}
              >
                ลงทะเบียนอีกครั้ง
              </Link>
            </div>
          )}
        </ContentWrapper>
      </Card>
    </Wrapper>
  )
}

function hasErrors(fieldsError: Record<string, string[]>) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
