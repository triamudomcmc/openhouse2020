import React, { useState } from 'react'
import styled from '@emotion/styled'
import { animated, useSpring } from 'react-spring'
import { Menu, X } from 'react-feather'
import { Link, Wrapper, Logo, Title } from './Common'
import { media } from '../../design'

const MobileNavCtrl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`

const MobileNav = styled.div`
  display: none;

  ${media('TABLET')} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const Mobile = () => {
  const [expanded, setExpanded] = useState(false)

  const menuTransitions = useSpring({
    visibility: expanded ? 'visible' : 'hidden',
    height: expanded ? 192 : 0
  })

  return (
    <Wrapper>
      <MobileNav>
        <MobileNavCtrl>
          <Logo>
            <Title>OPENHOUSE 2020</Title>
          </Logo>
          {expanded ? (
            <X onClick={() => setExpanded(expanded => !expanded)} />
          ) : (
            <Menu onClick={() => setExpanded(expanded => !expanded)} />
          )}
        </MobileNavCtrl>
        <animated.div style={menuTransitions}>
          <MobileMenuWrapper>
            <Link>หน้าหลัก</Link>
            <Link>ภายในงาน</Link>
            <Link>แผนที่</Link>
            <Link>ตารางเวลา</Link>
            <Link>การเดินทาง</Link>
            <Link>ลงทะเบียน</Link>
          </MobileMenuWrapper>
        </animated.div>
      </MobileNav>
    </Wrapper>
  )
}
