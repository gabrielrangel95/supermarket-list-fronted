import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { Button, Input } from '../../components'
import { SAVE_USERNAME_PATH } from '../../services/constants'
import {
  ScreenContainer,
  ScreenContentContainer,
  BagImage,
  Subtitle,
  Title,
  ButtonContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 3) {
      alert('Username deve conter mais do que 3 caracteres!')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ScreenContentContainer>
        <BagImage />
        <Title>Sua lista de supermercado mais fácil do que nunca</Title>
        <Subtitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </Subtitle>

        <Subtitle mw={452} mb={16} textAlign="left">
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>

        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Ex: usuario1"
        />
        <ButtonContainer>
          <Button onClick={onClickContinue}>Continuar</Button>
        </ButtonContainer>
      </ScreenContentContainer>
    </ScreenContainer>
  )
}
