import { InputContainer, InputLabel, InputText } from './styles'

export const Input = ({ label, placeholder, value, onChange, type }) => {
  return (
    <InputContainer>
      <InputLabel className="input-label">{label}</InputLabel>
      <InputText
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="input"
        placeholder={placeholder}
        type={type || 'text'}
      />
    </InputContainer>
  )
}
