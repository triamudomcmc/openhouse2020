import React, { useState } from 'react'
import { X } from 'react-feather'
import styled from '@emotion/styled'

import { Table, Button } from 'antd'

import { Wrapper } from './Wrapper'
import { Card } from './Card'
import { Modal, ContentWrapper, CloseWrapper } from './Modal'
import { Auditorium } from '../data/auditorium'

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Start',
    dataIndex: 'startTime',
    key: 'startTime'
  },
  {
    title: 'End',
    dataIndex: 'endTime',
    key: 'endTime'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'By',
    dataIndex: 'by',
    key: 'by'
  }
]

const CardTitle = styled.h1`
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  margin-top: 24px;
`

const InfoButton = styled(Button)`
  margin-left: 8px;

  :first-of-type {
    margin-left: 0;
  }
`

export const Schedule = () => {
  const [auditoriumState, setAuditoriumState] = useState(false)
  const [larn70State, setLarn70State] = useState(false)

  return (
    <Wrapper>
      <Card width={600} minHeight={400} curved padding bg="white">
        <CardTitle>ตารางเวลา</CardTitle>
        <ButtonWrapper>
          <InfoButton onClick={() => setAuditoriumState(true)}>
            หอประชุม
          </InfoButton>
          <InfoButton onClick={() => setLarn70State(true)}>
            ลานเอนกประสงค์ 70 ปี ต.อ.
          </InfoButton>
        </ButtonWrapper>

        <Modal open={auditoriumState} setModalState={setAuditoriumState}>
          <Card width={750} height={600} bg="white" curved padding>
            <CloseWrapper>
              <X
                onClick={() => setAuditoriumState(false)}
                style={{ color: 'black', cursor: 'pointer' }}
              />
            </CloseWrapper>
            <ContentWrapper>
              <Table columns={columns} dataSource={Auditorium} />
            </ContentWrapper>
          </Card>
        </Modal>

        <Modal open={larn70State} setModalState={setLarn70State}>
          <Card width={750} height={600} bg="white" curved padding>
            <CloseWrapper>
              <X
                onClick={() => setLarn70State(false)}
                style={{ color: 'black', cursor: 'pointer' }}
              />
            </CloseWrapper>
            {/* <ContentWrapper>
              <Table columns={columns} dataSource={Auditorium} />
            </ContentWrapper> */}
          </Card>
        </Modal>
      </Card>
    </Wrapper>
  )
}
