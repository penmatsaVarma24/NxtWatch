import {useContext} from 'react'

import Header from '../Header'

import LeftNavbar from '../LeftNavbar'

import WatchContext from '../../context/WatchContext'

import {
  NotFoundMainContainer,
  ContentContainer,
  NavContainer,
  NotFoundHeaderContainer,
  SearchContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styled'

const NotFound = () => {
  const {theme} = useContext(WatchContext)

  const notFoundImage =
    theme === 'light'
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

  return (
    <NotFoundMainContainer data-testid="not found" change={theme}>
      <NotFoundHeaderContainer change={theme}>
        <Header />
      </NotFoundHeaderContainer>
      <ContentContainer>
        <NavContainer>
          <LeftNavbar />
        </NavContainer>
        <SearchContainer change={theme}>
          <NotFoundContainer>
            <NotFoundImage src={notFoundImage} alt="not found" />
            <NotFoundHeading change={theme}>Page Not Found</NotFoundHeading>
            <NotFoundPara change={theme}>
              We are sorry, the page you requested could not be found.
            </NotFoundPara>
          </NotFoundContainer>
        </SearchContainer>
      </ContentContainer>
    </NotFoundMainContainer>
  )
}

export default NotFound
