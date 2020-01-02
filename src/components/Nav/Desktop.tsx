import React from 'react'
import {
  SchoolLink,
  Link,
  Wrapper,
  Logo,
  Title,
  scrollToInside,
  scrollToSchedule,
  scrollToDirection
} from './Common'
import styled from '@emotion/styled'
import { media } from '../../design'

export const DesktopMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 4;

  ${media('TABLET')} {
    display: none;
  }
`

const DesktopWrapper = styled(Wrapper)`
  ${media('TABLET')} {
    display: none;
  }
`

const SchoolLinkWrapper = styled.a`
  color: #515151;
`

export const Desktop = () => (
  <DesktopWrapper>
    <Logo>
      <Title>OPENHOUSE 2020</Title>
    </Logo>
    <DesktopMenu>
      <Link href="#">หน้าหลัก</Link>
      <Link onClick={scrollToInside}>ภายในงาน</Link>
      <Link href="/assets/img/map.jpg">แผนที่</Link>
      <Link onClick={scrollToSchedule}>ตารางเวลา</Link>
      <Link onClick={scrollToDirection}>การเดินทาง</Link>
      <SchoolLinkWrapper
        rel="noopener noreferrer"
        href="http://www.triamudom.ac.th/"
        target="_blank"
      >
        <SchoolLink size={18} />
      </SchoolLinkWrapper>
    </DesktopMenu>
  </DesktopWrapper>
)
