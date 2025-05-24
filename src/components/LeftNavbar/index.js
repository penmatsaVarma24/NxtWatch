import {useContext} from 'react'

import Footer from '../Footer'

import WatchContext from '../../context/WatchContext'

import {
  LeftNavbarContainer,
  RouteListContainer,
  StyledMdHome,
  RoutePara,
  ListItem,
  StyledFaFire,
  StyledFaGamepad,
  StyledFaFolderPlus,
  LinkItem,
  NavbarFooterContainer,
} from './styled'

const LeftNavbar = () => {
  const {theme} = useContext(WatchContext)

  return (
    <LeftNavbarContainer>
      <RouteListContainer>
        <ListItem>
          <LinkItem to="/">
            <StyledMdHome change={theme} />
            <RoutePara change={theme}>Home</RoutePara>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem to="/trending">
            <StyledFaFire change={theme} />
            <RoutePara change={theme}>Trending</RoutePara>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem to="/gaming">
            <StyledFaGamepad change={theme} />
            <RoutePara change={theme}>Gaming</RoutePara>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem to="/saved-videos">
            <StyledFaFolderPlus change={theme} />
            <RoutePara change={theme}>Saved Videos</RoutePara>
          </LinkItem>
        </ListItem>
      </RouteListContainer>
      <NavbarFooterContainer>
        <Footer />
      </NavbarFooterContainer>
    </LeftNavbarContainer>
  )
}

export default LeftNavbar
