import styled from 'styled-components'

export const ModalBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 26vw;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;

  @media (max-width: 830px) {
    width: 60vw;
  }

  @media (max-width: 420px) {
    width: 100vw;
  }
`

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`
export const ModalCloseButton = styled.button`
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 0px;
  background-image: url('../../../public/images/close.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 12vh;
  width: 100%;
  justify-content: space-between;
  margin-top: 62vh;

  @media (max-width: 420px) {
    height: 18vh;
    margin-top: 42vh;
  }
`
