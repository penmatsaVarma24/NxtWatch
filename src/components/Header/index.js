import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

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
  ThemeButton
} from './styled'

class Header extends Component {
  onClickConfirm = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <HeaderContainer>
        <Link to="/">
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          ></LogoImage>
        </Link>
        <LogoutContainer>
          <ThemeButton>
            <StyledFaMoon data-testid="theme"></StyledFaMoon>
          </ThemeButton>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          ></ProfileImage>
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
                    <ConfirmButton type="button" onClick={this.onClickConfirm}>
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
}

export default withRouter(Header)
