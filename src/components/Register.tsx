import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Form, Icon, Input, Button, Radio, Select } from 'antd'

import { media } from '../design'
import { Card } from './Card'
import { FormComponentProps } from 'antd/lib/form'

const Wrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  background-color: #1c1e28;
  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media('TABLET')} {
    min-height: 100vh;
    height: unset;
  }
`

const CardTitle = styled.h1`
  text-align: left;
  font-weight: 700;
  line-height: 1.15;
`

const StyledForm = styled(Form)`
  margin-top: 24px;
`

const { Option } = Select

export const RegisterComponent = (props: FormComponentProps) => {
  const { getFieldDecorator, validateFields } = props.form
  const [isEdLevelRequired, setIsEdLevelRequired] = useState(false)

  const handleTypeChange = (e: any) => {
    if (e.target.value === 'student') {
      setIsEdLevelRequired(true)
    } else {
      setIsEdLevelRequired(false)
    }
  }

  useEffect(() => {
    validateFields(['edlevel'], { force: true })
  }, [isEdLevelRequired])

  return (
    <Wrapper>
      <Card width={400} minHeight={400} curved padding bg="white">
        <CardTitle>ลงทะเบียน</CardTitle>
        <StyledForm layout="vertical">
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
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="First name"
              />
            )}
          </Form.Item>
          <Form.Item label="นามสกุล">
            {getFieldDecorator('lastname', {
              rules: [{ required: true, message: 'โปรดใส่นามสกุล' }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
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
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
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
          <Form.Item label="ระดับการศึกษา">
            {getFieldDecorator('edlevel', {
              rules: [
                {
                  required: isEdLevelRequired,
                  message: 'โปรดเลือกระดับการศึกษา'
                }
              ]
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Join Open House!
            </Button>
          </Form.Item>
        </StyledForm>
      </Card>
    </Wrapper>
  )
}

export const Register = Form.create({ name: 'register' })(RegisterComponent)
