import styled from 'styled-components'

export const Loader = styled.span`
  width: 64px;
  height: 64px;
  border: 8px solid ${({ theme }) => theme.colors.white};
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
