import React, { useState } from 'react'
import { useCloseModal, useModalIsOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import styled from 'styled-components/macro'

import Modal from '../Modal'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.deepShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  min-height: 720px;
  min-width: 375px;
  position: relative;
  width: 100%;
`

const StyledIframe = styled.iframe`
  background-color: ${({ theme }) => theme.white};
  border-radius: 12px;
  bottom: 0;
  left: 0;
  height: calc(100% - 16px);
  margin: 8px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 16px);
`

const OpenModalButton = styled.button`
  background-color: #d28a1e;
  color: #fafafa;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const CloseButton = styled.button`
  background-color: #d28a1e;
  color: #fafafa;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`

export default function FiatOnrampModal() {
  const closeModalFunction = useCloseModal()
  const fiatOnrampModalOpen = useModalIsOpen(ApplicationModal.FIAT_ONRAMP)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Add a button to open the modal */}
      <OpenModalButton onClick={openModal}>Buy Crypto</OpenModalButton>

      {/* Display the modal */}
      <Modal isOpen={isModalOpen} onDismiss={closeModalFunction} maxHeight={720}>
        <CloseButton onClick={closeModal}>X</CloseButton> {/* Close button (X) */}
        <Wrapper data-testid="fiat-onramp-modal">
          <StyledIframe
            src="https://buy.onramper.com/?apiKey=pk_prod_01H5AXWF5H767QV1SA4Z3RRPWE"
            frameBorder="0"
            title="Onramper widget"
          />
        </Wrapper>
      </Modal>
    </>
  )
}
