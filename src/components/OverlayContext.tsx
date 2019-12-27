import React, { useContext, useState, useEffect } from 'react'

const defaultSetState: React.Dispatch<React.SetStateAction<boolean>> = () => {}
const OverlayContext = React.createContext(defaultSetState)

export const OverlayProvider: React.FC = props => {
  const [modalOpen, setModalState] = useState(false)

  useEffect(() => {
    if (typeof document !== undefined) {
      const body = document.getElementsByTagName('html')

      body[0].setAttribute('style', modalOpen ? 'overflow: hidden;' : '')
    }
  }, [modalOpen])

  return (
    <OverlayContext.Provider value={setModalState}>
      {props.children}
    </OverlayContext.Provider>
  )
}

export const useOverlay = () => useContext(OverlayContext)
