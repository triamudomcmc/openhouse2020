import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styled from '@emotion/styled'
import { useTransition, animated } from 'react-spring'

import { useOverlay } from './OverlayContext'
import { overlay } from '../design'

const Wrapper = styled(animated.div)`
  ${overlay}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Background = styled.div`
  ${overlay}
  background-color: rgba(0, 0, 0, 0.4);
`

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  margin-top: 24px;
`

export const CloseWrapper = styled.div`
  text-align: end;
  width: 100%;
`

/**
 * 
 * <Modal open={modalState} setModalState={setModalState}>
        <Card width={750} height={600} bg="white" curved padding>
          <CloseWrapper>
            <X
              onClick={() => setModalState(false)}
              style={{ color: 'black', cursor: 'pointer' }}
            />
          </CloseWrapper>
        </Card>
      </Modal>
 */
export const Modal: React.FC<{
  open: boolean
  setModalState: Dispatch<SetStateAction<Boolean>>
}> = props => {
  const setGlobalClip = useOverlay()

  useEffect(() => {
    setGlobalClip(props.open)
  }, [props.open])

  const transitions = useTransition(props.open, null, {
    from: { position: 'fixed', opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'flex' },
    leave: { opacity: 0, display: 'none' }
  })

  return (
    <React.Fragment>
      {transitions.map(
        ({ item, key, props: transitionProps }) =>
          item && (
            <Wrapper style={transitionProps} key={key}>
              <Background onClick={() => props.setModalState(false)} />
              <Content>{props.children}</Content>
            </Wrapper>
          )
      )}
    </React.Fragment>
  )
}
