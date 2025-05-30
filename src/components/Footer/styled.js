import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const ContactHeading = styled.p`
  font-weight: bold;
  color: ${props => (props.change === 'light' ? 'black' : '#f4f4f4')};
`

export const IconsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconImage = styled.img`
  width: 25%;
`

export const FooterPara = styled.p`
  color: #616e7c;
  color: ${props => (props.change === 'light' ? 'black' : '#f4f4f4')};
`
