import {useContext, useState, useEffect} from 'react'

import {useMediaQuery} from 'react-responsive'

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
  PopupMenuContainer,
  PopupSubContainer,
  PopupPara,
  ConfirmButton,
  CancelButton,
  ButtonContainer,
  ThemeButton,
  StyledLightMode,
  StyledLogout,
  MenuButton,
  PopupMenuSubContainer,
  StyledMenu,
  LinkMenuItem,
  RouteMenuPara,
  ListMenuItem,
  StyledMenuFaFolderPlus,
  StyledMenuFaGamepad,
  StyledMenuFaFire,
  StyledMenuMdHome,
  RouteListMenuContainer,
  StyledMenuClose,
  CloseButton,
} from './styled'

const Header = props => {
  const {history} = props

  const {theme, setTheme} = useContext(WatchContext)

  const onClickConfirm = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const isMobile = useMediaQuery({query: '(max-width: 767px)'})

  const displayButton = isMobile ? (
    <StyledLogout change={theme} />
  ) : (
    'Logout'
  )

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
          {theme === 'dark' ? <StyledLightMode /> : <StyledFaMoon />}
        </ThemeButton>

        <PopupMenuContainer>
          <Popup
            modal
            trigger={
              <MenuButton type="button" className="trigger-button">
                <StyledMenu change={theme} />
              </MenuButton>
            }
          >
            {close => (
              <PopupMenuSubContainer change={theme}>
                <CloseButton
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <StyledMenuClose change={theme} />
                </CloseButton>
                <div>
                  <RouteListMenuContainer>
                    <ListMenuItem>
                      <LinkMenuItem
                        exact="true"
                        to="/"
                        activeclassname="active"
                        change={theme}
                        data-testid="homeLink"
                      >
                        <StyledMenuMdHome change={theme} />
                        <RouteMenuPara change={theme}>Home</RouteMenuPara>
                      </LinkMenuItem>
                    </ListMenuItem>
                    <ListMenuItem>
                      <LinkMenuItem
                        exact="true"
                        to="/trending"
                        change={theme}
                        data-testid="trendingLink"
                      >
                        <StyledMenuFaFire change={theme} />
                        <RouteMenuPara change={theme}>Trending</RouteMenuPara>
                      </LinkMenuItem>
                    </ListMenuItem>
                    <ListMenuItem>
                      <LinkMenuItem
                        exact="true"
                        to="/gaming"
                        change={theme}
                        data-testid="gamingLink"
                      >
                        <StyledMenuFaGamepad change={theme} />
                        <RouteMenuPara change={theme}>Gaming</RouteMenuPara>
                      </LinkMenuItem>
                    </ListMenuItem>
                    <ListMenuItem>
                      <LinkMenuItem
                        exact="true"
                        to="/saved-videos"
                        change={theme}
                        data-testid="savedVideosLink"
                      >
                        <StyledMenuFaFolderPlus change={theme} />
                        <RouteMenuPara change={theme}>
                          Saved Videos
                        </RouteMenuPara>
                      </LinkMenuItem>
                    </ListMenuItem>
                  </RouteListMenuContainer>
                </div>
              </PopupMenuSubContainer>
            )}
          </Popup>
        </PopupMenuContainer>

        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <PopupContainer>
          <Popup
            trigger={<LogoutButton type="button">{displayButton}</LogoutButton>}
            modal
          >
            {close => (
              <PopupSubContainer change={theme}>
                <div>
                  <PopupPara change={theme}>
                    Are you sure, you want to logout?
                  </PopupPara>
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
