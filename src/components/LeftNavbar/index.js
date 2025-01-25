import {Component} from 'react'

import {Link} from 'react-router-dom'

import Footer from '../Footer'

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

class LeftNavbar extends Component {
  render() {
    return (
      <LeftNavbarContainer>
        <RouteListContainer>
          <ListItem>
            <LinkItem to="/">
              <StyledMdHome></StyledMdHome>
              <RoutePara>Home</RoutePara>
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/trending">
              <StyledFaFire></StyledFaFire>
              <RoutePara>Trending</RoutePara>
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/gaming">
              <StyledFaGamepad></StyledFaGamepad>
              <RoutePara>Gaming</RoutePara>
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/saved-videos">
              <StyledFaFolderPlus></StyledFaFolderPlus>
              <RoutePara>Saved Videos</RoutePara>
            </LinkItem>
          </ListItem>
        </RouteListContainer>
        <NavbarFooterContainer>
          <Footer />
        </NavbarFooterContainer>
      </LeftNavbarContainer>
    )
  }
}

export default LeftNavbar
