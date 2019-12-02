import React from 'react'
import { DarkModeMoon, Link, Wrapper, Logo, Title } from './Common'
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

export const Desktop = () => (
  <DesktopWrapper>
    <Logo>
      <Title>OPENHOUSE 2020</Title>
    </Logo>
    <DesktopMenu>
      <Link>หน้าหลัก</Link>
      <Link>ภายในงาน</Link>
      <Link>แผนที่</Link>
      <Link>ตารางเวลา</Link>
      <Link>การเดินทาง</Link>
      <Link>ลงทะเบียน</Link>
      <DarkModeMoon size={18} />
    </DesktopMenu>
  </DesktopWrapper>
)
