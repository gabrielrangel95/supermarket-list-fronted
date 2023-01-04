import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Avenir';
  border-radius: 24px;
  height: 42px;
  border: 0px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.light : theme.colors.primary};
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.light};

  @media (max-width: 420px) {
    max-width: 300px;
  }
`

export const ButtonIcon = styled.img`
  height: 24px;
  width: 24px;
  object-fit: contain;
  margin-right: 6px;
`
