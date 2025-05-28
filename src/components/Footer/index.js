import {useContext} from 'react'

import WatchContext from '../../context/WatchContext'

import {
  FooterContainer,
  ContactHeading,
  IconsContainer,
  IconImage,
  FooterPara,
} from './styled'

const Footer = () => {
  const {theme} = useContext(WatchContext)

  return (
    <FooterContainer>
      <ContactHeading change={theme}>CONTACT US</ContactHeading>
      <IconsContainer>
        <IconImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <IconImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <IconImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </IconsContainer>
      <FooterPara change={theme}>
        Enjoy! Now to see your channels and recommendations!
      </FooterPara>
    </FooterContainer>
  )
}

export default Footer
