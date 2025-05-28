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
  margin-top: 65px;
`

export const NavContainer = styled.div`
  @media (min-width: 768px) {
    min-height: 90vh;
    width: 20%;
    position: fixed;
    left: 0;
    overflow-y: auto;
  }

  @media (max-width: 767px) {
    display: none;
  }
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
  background-color: ${props =>
    props.change === 'light' ? '#f1f1f1' : '#181818'};
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 100vh;
    width: 80%;
    margin-left: 20%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
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
  text-align: center;
`
