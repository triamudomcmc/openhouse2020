import React from 'react'
import styled from '@emotion/styled'
import { Wrapper } from './Wrapper'
import { Card } from './Card'

const CardTitle = styled.h1`
  text-align: left;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
`

export const Schedule = () => {
  return (
    <Wrapper>
      <Card width={600} minHeight={400} curved padding>
        <CardTitle>ตารางเวลา</CardTitle>
      </Card>
    </Wrapper>
  )
}
