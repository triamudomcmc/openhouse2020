import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Card } from '../Card'
import { Link as DefaultLink } from '../Nav/Common'
import { media } from '../../design'
import { Wrapper } from '../Wrapper'
import { Clubs } from './Clubs'
import { Programs } from './Programs'

const MenuWrapper = styled.div`
  display: flex;

  ${media('TABLET')} {
    flex-direction: column;
  }
`

const Link = styled(DefaultLink)`
  color: #d1d1d1;

  :hover {
    color: white;
  }

  ${media('TABLET')} {
    text-align: center !important;
    margin: 0;
  }
`

const CardWrapper = styled.div`
  margin-top: 24px;
  max-width: 100%;
`

const CardTitle = styled.h1`
  text-align: left;
`

export const Inside = () => {
  const [currentTab, setCurrentTab] = useState<
    'clubs' | 'programs' | 'contests'
  >('clubs')

  const getCurrent = () => {
    switch (currentTab) {
      case 'clubs':
        return <Clubs />
      case 'programs':
        return <Programs />
    }
  }

  return (
    <Wrapper>
      <MenuWrapper>
        <Link onClick={() => setCurrentTab('clubs')}>ชมรม</Link>
        <Link onClick={() => setCurrentTab('programs')}>สายการเรียน</Link>
        <Link>การแข่งขัน</Link>
      </MenuWrapper>
      <CardWrapper>
        <Card height={400} width={600} curved padding bg="white">
          <CardTitle>ภายในงาน</CardTitle>
          {getCurrent()}
        </Card>
      </CardWrapper>
    </Wrapper>
  )
}
