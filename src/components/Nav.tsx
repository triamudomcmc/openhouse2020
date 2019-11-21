import {} from 'rebass'
import styled from '@emotion/styled'
import { Fonts } from '../design'

const Wrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1000px;
  padding-top: 24px;
`

const Link = styled.a`
  color: #000;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  color: #282c35;
  font-weight: 700;
  font-family: ${Fonts.display};

  :last-child {
    margin-right: 0px;
  }
`

const Logo = styled.div`
  flex-grow: 1;
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 20px;
`

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 4;
`

export const Nav = () => {
  return (
    <Wrapper>
      <Logo>
        <Title>OPENHOUSE 2020</Title>
      </Logo>
      <Menu>
        <Link>หน้าหลัก</Link>
        <Link>ภายในงาน</Link>
        <Link>แผนที่</Link>
        <Link>ตารางเวลา</Link>
        <Link>การเดินทาง</Link>
        <Link>ลงทะเบียน</Link>
      </Menu>
    </Wrapper>
  )
}
