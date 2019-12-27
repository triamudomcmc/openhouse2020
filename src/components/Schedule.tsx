import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Table } from 'antd'

import { Wrapper } from './Wrapper'
import { Card } from './Card'
import { Modal, ContentWrapper, CloseWrapper } from './Modal'
import { X } from 'react-feather'
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

export const Schedule = () => {
  const [modalState, setModalState] = useState(false)
  return (
    <Wrapper>
      <Card width={600} minHeight={400} curved padding bg="white">
        <CardTitle>ตารางเวลา</CardTitle>
        <button onClick={() => setModalState(true)}>Test</button>

        <Modal open={modalState} setModalState={setModalState}>
          <Card width={750} height={600} bg="white" curved padding>
            <CloseWrapper>
              <X
                onClick={() => setModalState(false)}
                style={{ color: 'black', cursor: 'pointer' }}
              />
            </CloseWrapper>
            <ContentWrapper>
              <Table columns={columns} dataSource={Auditorium} />
            </ContentWrapper>
          </Card>
        </Modal>
      </Card>
    </Wrapper>
  )
}
