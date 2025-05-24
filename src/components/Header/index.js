import {useContext} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import WatchContext from '../../context/WatchContext'

import {
  HeaderContainer,
  LogoImage,
  LogoutContainer,
  ProfileImage,
  LogoutButton,
  StyledFaMoon,
  PopupContainer,
  PopupSubContainer,
  PopupPara,
  ConfirmButton,
  CancelButton,
  ButtonContainer,
  ThemeButton,
  StyledLightMode,
} from './styled'

const Header = props => {
  const {history} = props

  const onClickConfirm = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {theme, setTheme} = useContext(WatchContext)

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const logo =
    theme === 'light'
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

  return (
    <HeaderContainer change={theme}>
      <Link to="/">
        <LogoImage src={logo} alt="website logo" />
      </Link>
      <LogoutContainer>
        <ThemeButton data-testid="theme" onClick={onChangeTheme}>
          {theme === 'dark' ? (
            <StyledLightMode />
          ) : (
            <StyledFaMoon />
          )}
        </ThemeButton>
        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
         />
        <PopupContainer>
          <Popup
            trigger={<LogoutButton type="button">Logout</LogoutButton>}
            modal
          >
            {close => (
              <PopupSubContainer>
                <div>
                  <PopupPara>Are you sure, you want to logout?</PopupPara>
                </div>
                <ButtonContainer>
                  <CancelButton type="button" onClick={() => close()}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton type="button" onClick={onClickConfirm}>
                    Confirm
                  </ConfirmButton>
                </ButtonContainer>
              </PopupSubContainer>
            )}
          </Popup>
        </PopupContainer>
      </LogoutContainer>
    </HeaderContainer>
  )
}

export default withRouter(Header)
