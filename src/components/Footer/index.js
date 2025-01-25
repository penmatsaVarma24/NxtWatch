import {
  FooterContainer,
  ContactHeading,
  IconsContainer,
  IconImage,
  FooterPara,
} from './styled'

const Footer = () => (
  <FooterContainer>
    <ContactHeading>CONTACT US</ContactHeading>
    <IconsContainer>
      <IconImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
        alt="facebook logo"
      ></IconImage>
      <IconImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
        alt="twitter logo"
      ></IconImage>
      <IconImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
        alt="linked in logo"
      ></IconImage>
    </IconsContainer>
    <FooterPara>
      Enjoy! Now to see your channels and recommendations!
    </FooterPara>
  </FooterContainer>
)

export default Footer
