import React, { useContext, useState, useEffect } from 'react'

const defaultSetState: React.Dispatch<React.SetStateAction<boolean>> = () => {}
const ModalContext = React.createContext(defaultSetState)

export const ModalProvider: React.FC = props => {
  const [modalOpen, setModalState] = useState(false)

  useEffect(() => {
    if (typeof document !== undefined) {
      const body = document.getElementsByTagName('body')

      body[0].setAttribute('style', modalOpen ? 'overflow: hidden;' : '')
    }
  }, [modalOpen])

  return (
    <ModalContext.Provider value={setModalState}>
      {props.children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
