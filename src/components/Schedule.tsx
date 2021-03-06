import React, { useState, useEffect } from 'react'
import { X } from 'react-feather'
import styled from '@emotion/styled'

import { Table, Button } from 'antd'

import { Wrapper } from './Wrapper'
import { Card } from './Card'
import { Modal, ContentWrapper, CloseWrapper } from './Modal'
import { Auditorium } from '../data/auditorium'
import { media } from '../design'
import { Larn70 } from '../data/larn70'
import { checkTime } from '../utils/checkTime'
import { Data } from '../@types/data'

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

  ${media('TABLET')} {
    flex-direction: column;
  }
`

const InfoButton = styled(Button)`
  margin-left: 8px;

  :first-of-type {
    margin-left: 0;
  }

  ${media('TABLET')} {
    margin-left: 0;
    margin-top: 8px;

    :first-of-type {
      margin-top: 0;
    }
  }
`

const TableTitle = styled.h1`
  text-align: left;
  margin-bottom: 24px;
`

const SubTitle = styled.h2`
  margin-top: 24px;
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.15;
`

const NowShowingWrapper = styled.div`
  text-align: left;
  padding-top: 24px;
`

export const Schedule = () => {
  const [auditoriumState, setAuditoriumState] = useState(false)
  const [larn70State, setLarn70State] = useState(false)
  const [currentAuditorium, setCurAuditorium] = useState<Data[]>([])
  const [currentLarn70, setCurLarn70] = useState<Data[]>([])

  useEffect(() => {
    setCurAuditorium(Auditorium.filter(checkTime))
    setCurLarn70(Larn70.filter(checkTime))
  }, [])

  return (
    <Wrapper>
      <Card width={600} minHeight={400} curved padding bg="white">
        <CardTitle>???????????????????????????</CardTitle>
        <ButtonWrapper>
          <InfoButton onClick={() => setAuditoriumState(true)}>
            ????????????????????????
          </InfoButton>
          <InfoButton onClick={() => setLarn70State(true)}>
            ?????????????????????????????????????????? 70 ?????? ???.???.
          </InfoButton>
        </ButtonWrapper>
        <SubTitle>NOW SHOWING!</SubTitle>
        <NowShowingWrapper>
          <p>
            ????????????????????????:{' '}
            {currentAuditorium.length
              ? currentAuditorium.map(data => data.name)
              : '??????????????????????????????????????????????????? ??? ????????????????????????'}
          </p>
          <p>
            ?????????????????????????????????????????? 70 ?????? ???.???.:{' '}
            {currentLarn70.length
              ? currentLarn70.map(data => data.name)
              : '??????????????????????????????????????????????????? ??? ????????????????????????'}
          </p>
        </NowShowingWrapper>

        <Modal open={auditoriumState} setModalState={setAuditoriumState}>
          <Card width={750} height={600} bg="white" curved padding>
            <CloseWrapper>
              <X
                onClick={() => setAuditoriumState(false)}
                style={{ color: 'black', cursor: 'pointer' }}
              />
            </CloseWrapper>
            <ContentWrapper>
              <TableTitle>????????????????????????</TableTitle>
              <Table
                columns={columns}
                dataSource={Auditorium}
                size="small"
                scroll={{ x: 850 }}
                pagination={{ pageSize: 100 }}
              />
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
            <ContentWrapper>
              <TableTitle>?????????????????????????????????????????? 70 ?????? ???.???.</TableTitle>

              <Table
                columns={columns}
                dataSource={Larn70}
                size="small"
                scroll={{ x: 850 }}
                pagination={{ pageSize: 100 }}
              />
            </ContentWrapper>
          </Card>
        </Modal>
      </Card>
    </Wrapper>
  )
}
