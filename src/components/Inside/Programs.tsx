import React from 'react'
import styled from '@emotion/styled'
import { programsList } from '../../data/programs'

const ProgramsWrapper = styled.div`
  overflow: auto;
`
const List = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0.75em;
`

export const Programs = () => (
  <ProgramsWrapper>
    <List>
      {programsList.map(val => (
        <li>{val.title}</li>
      ))}
    </List>
  </ProgramsWrapper>
)
