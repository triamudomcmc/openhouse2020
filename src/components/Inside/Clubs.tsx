import React from 'react'
import styled from '@emotion/styled'
import { clubsList } from '../../data/clubs'

const ClubsWrapper = styled.div`
  overflow: auto;
`
const List = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0.75em;
`

export const Clubs = () => (
  <ClubsWrapper>
    <List>
      {clubsList.map(val => (
        <li>{val}</li>
      ))}
    </List>
  </ClubsWrapper>
)
