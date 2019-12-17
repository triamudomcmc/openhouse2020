import React from 'react'
import styled from '@emotion/styled'
import { Card } from './Card'
import { media } from '../design'

const Wrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  background-color: #1c1e28;
  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media('TABLET')} {
    min-height: 100vh;
    height: unset;
  }
`

const CardTitle = styled.h1`
  text-align: left;
`

const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0.75em;
`

const SubTitle = styled.h2`
  text-align: left;
  font-size: 1.7em;
  margin-top: 48px;
`

const ListTitle = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 4px;
`

const MapLink = styled.a`
  font-size: 1.1rem;
  color: #5ed0fa;
`

const MapLinkWrapper = styled.div`
  text-align: left;
  margin-top: 24px;
`

export const Direction = () => (
  <Wrapper>
    <Card width={600} minHeight={400} curved padding>
      <CardTitle>การเดินทาง</CardTitle>
      <MapLinkWrapper>
        <MapLink
          rel="noopener noreferrer"
          href="https://goo.gl/maps/EtM6hsJg8kz"
          target="_blank"
        >
          แผนที่
        </MapLink>
      </MapLinkWrapper>
      <List>
        <li>
          <ListTitle>รถประจำทาง</ListTitle>{' '}
          มีป้ายรถประจำทางอยู่ทั้งสองประตูของโรงเรียน
          <br />
          ถนนพญาไท: 21, 25, 29, 34, 36, 40, 47, 50, 93, 113, 141, 187, 542
          <br />
          ถนนอังรีดูนังต์: 16, 21
        </li>
        <br />
        <li>
          <ListTitle>รถไฟฟ้า BTS สถานีสยาม</ListTitle>{' '}
          โดยสามารถเดินต่อมายังโรงเรียนเตรียมอุดมศึกษาได้ทั้งฝั่งถนนพญาไท (900
          เมตร) และถนนอังรีดูนังต์ (500-800 เมตร)
        </li>
        <br />
        <li>
          <ListTitle>รถไฟฟ้า MRT สถานีสามย่าน</ListTitle>{' '}
          โดยสามารถเดินต่อมายังโรงเรียนเตรียมอุดมศึกษาได้ทั้งฝั่งถนนพญาไท (800
          เมตร) และถนนอังรีดูนังต์ (1,200 เมตร)
        </li>
      </List>
      <SubTitle>ประตูโรงเรียน</SubTitle>
      <List>
        <li>
          <ListTitle>ประตูถนนพญาไท</ListTitle>(ตึก 1)
          ใกล้กับคณะสถาปัตยกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
        </li>
        <br />
        <li>
          <ListTitle>ประตูถนนอังรีดูนังต์</ListTitle> (ตึก 3){' '}
          เชื่อมต่อกับโรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ปทุมวัน
          และคณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
        </li>
      </List>
      <List>
        <li style={{ color: 'red' }}>
          *หมายเหตุ ประตูถนนอังรีดูนังต์ (ตึก 50 ปี)
          ใกล้เคียงกับคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย{' '}
          <i>ไม่เปิดให้ใช้งาน</i>
        </li>
      </List>
    </Card>
  </Wrapper>
)
