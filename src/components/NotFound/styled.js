import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#212121'};
`

export const ContentContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
`

export const NavContainer = styled.div`
  min-height: 90vh;
  width: 20%;
  position: fixed;
  left: 0;
`

export const NotFoundHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#212121'};
  color: white;
  padding-top: 15px;
  text-align: center;
  z-index: 1000;
`

export const SearchContainer = styled.div`
  min-height: 130vh;
  width: 80%;
  margin-left: 300px;
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#181818'};
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
  margin-top: 20px;
  width: 100%;
  height: 85vh;
`

export const NotFoundImage = styled.img`
  width: 30%;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.change === 'light' ? '#212121' : '#ffffff')};
`

export const NotFoundPara = styled.p`
  color: ${props => (props.change === 'light' ? '#212121' : '#ffffff')};
`
