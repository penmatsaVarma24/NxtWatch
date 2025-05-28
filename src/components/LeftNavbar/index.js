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
          <LinkItem exact="true" to="/" activeclassname="active" change={theme}>
            <StyledMdHome change={theme} />
            <RoutePara change={theme}>Home</RoutePara>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem exact="true" to="/trending" change={theme}>
            <StyledFaFire change={theme} />
            <RoutePara change={theme}>Trending</RoutePara>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem exact="true" to="/gaming" change={theme}>
            <StyledFaGamepad change={theme} />
            <RoutePara change={theme}>Gaming</RoutePara>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem exact="true" to="/saved-videos" change={theme}>
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
