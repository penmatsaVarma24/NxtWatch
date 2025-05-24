import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

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

class LoginForm extends Component {
  state = {
    hidePassword: true,
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.renderSubmitSuccess(data.jwt_token)
    } else {
      console.log(data)
      this.renderSubmitFailure(data.error_msg)
    }
    // this.setState({username: '', password: ''})
  }

  renderSubmitFailure = errMsg => {
    this.setState({
      errorMsg: errMsg,
      showErrorMsg: true,
    })
  }

  renderSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({hidePassword: !prevState.hidePassword}))
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      username,
      password,
      hidePassword,
      errorMsg,
      showErrorMsg,
    } = this.state
    const passwordType = hidePassword ? 'password' : 'text'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
           />
          <Label htmlFor="username">USERNAME</Label>
          <Input
            id="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={this.onChangeUsername}
           />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            id="password"
            placeholder="Password"
            type={passwordType}
            value={password}
            onChange={this.onChangePassword}
           />
          <CheckContainer>
            <CheckInput
              id="showpassword"
              placeholder="showpassword"
              type="checkbox"
              onClick={this.onClickCheckbox}
             />
            <CheckLabel htmlFor="showpassword">Show Password</CheckLabel>
          </CheckContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <Paragraph>*{errorMsg}</Paragraph>}
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
