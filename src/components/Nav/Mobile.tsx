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
    height: expanded ? 168 : 0
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
            <Link href="#">หน้าหลัก</Link>
            <Link href="#inside">ภายในงาน</Link>
            <Link href="/assets/img/map.jpg">แผนที่</Link>
            <Link href="#schedule">ตารางเวลา</Link>
            <Link href="#direction">การเดินทาง</Link>
          </MobileMenuWrapper>
        </animated.div>
      </MobileNav>
    </Wrapper>
  )
}
