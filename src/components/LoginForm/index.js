import {useState, useContext} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import WatchContext from '../../context/WatchContext'

import {
  LoginContainer,
  FormContainer,
  LogoImage,
  Input,
  CheckInput,
  Label,
  LoginButton,
  CheckContainer,
  CheckLabel,
  Paragraph,
} from './styled'

const LoginForm = props => {
  const {history} = props

  const {theme} = useContext(WatchContext)

  const [hidePassword, setHidePassword] = useState(true)

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [errorMsg, setErrorMsg] = useState('')

  const [showErrorMsg, setShowErrorMsg] = useState(false)

  const logo =
    theme === 'light'
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

  const renderSubmitFailure = errMsg => {
    setShowErrorMsg(true)
    setErrorMsg(errMsg)
  }

  const renderSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      renderSubmitSuccess(data.jwt_token)
    } else {
      console.log(data)
      renderSubmitFailure(data.error_msg)
    }
  }

  const onClickCheckbox = () => {
    setHidePassword(!hidePassword)
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const passwordType = hidePassword ? 'password' : 'text'
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <LoginContainer change={theme}>
      <FormContainer onSubmit={onSubmitForm} change={theme}>
        <LogoImage src={logo} alt="website logo" />
        <Label htmlFor="username" change={theme}>
          USERNAME
        </Label>
        <Input
          id="username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={onChangeUsername}
          name="no-autofill"
          change={theme}
        />
        <Label htmlFor="password" change={theme}>
          PASSWORD
        </Label>
        <Input
          id="password"
          placeholder="Password"
          type={passwordType}
          value={password}
          onChange={onChangePassword}
          change={theme}
        />
        <CheckContainer>
          <CheckInput
            id="showpassword"
            placeholder="showpassword"
            type="checkbox"
            onClick={onClickCheckbox}
          />
          <CheckLabel htmlFor="showpassword" change={theme}>
            Show Password
          </CheckLabel>
        </CheckContainer>
        <LoginButton type="submit">Login</LoginButton>
        {showErrorMsg && <Paragraph>*{errorMsg}</Paragraph>}
      </FormContainer>
    </LoginContainer>
  )
}

export default LoginForm
