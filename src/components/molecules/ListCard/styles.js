import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 58px;
  min-height: 58px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  margin-bottom: 24px;
`

export const CheckImage = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  position: relative;
  margin-right: 12px;
  object-fit: contain;
`

export const TextContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
`

export const ArrowIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 10%;
  cursor: pointer;
`
export const ArrowIcon = styled.img.attrs({
  src: '/images/arrow.svg',
  alt: 'arrow-icon'
})`
  width: 6px;
  height: 12px;
  object-fit: contain;
`
