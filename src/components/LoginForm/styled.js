import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${props =>
    props.change === 'light' ? '#f9f9f9' : '#212121'};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#0f0f0f'};
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 30px;
    width: 30%;
  }

  @media (max-width: 767px) {
    padding: 10px;
    width: 90%;
  }
`

export const LogoImage = styled.img`
  align-self: center;
  width: 40%;
  margin-bottom: 40px;
`

export const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 8px 15px 8px 15px;
  border-radius: 7px;
  border: 1px solid #475569;
  background-color: transparent;
  color: ${props => (props.change === 'light' ? '#475569' : '#f1f5f9')};
`

export const CheckInput = styled.input``

export const Label = styled.label`
  color: ${props => (props.change === 'light' ? '#475569' : '#f1f5f9')};
  margin-bottom: 10px;
  font-size: 14px;
`

export const CheckLabel = styled.label`
  color: ${props => (props.change === 'light' ? '#475569' : '#f1f5f9')};
  margin-left: 10px;
`

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px 15px 10px 15px;
  background-color: #4f46e5;
  color: #ffffff;
  border: 0px;
  border-radius: 7px;
`

export const CheckContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`

export const Paragraph = styled.p`
  color: #ff0000;
`
