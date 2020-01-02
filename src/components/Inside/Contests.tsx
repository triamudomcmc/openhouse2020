import React from 'react'
import styled from '@emotion/styled'
import { contestsList } from '../../data/contests'

const ContestsWrapper = styled.div`
  overflow: auto;
`
const List = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0.75em;
`

export const Contests = () => (
  <ContestsWrapper>
    <List>
      {contestsList.map(val => (
        <li>{val.title}</li>
      ))}
    </List>
  </ContestsWrapper>
)
