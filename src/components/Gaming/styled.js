import styled from 'styled-components'

import {FaGamepad} from 'react-icons/fa'

export const GamingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.change === 'light' ? '#f9f9f9' : '#0f0f0f'};
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
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const GamingHeaderContainer = styled.div`
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

export const GamingDisplayContainer = styled.div`
  background-color: ${props =>
    props.change === 'light' ? '#f1f1f1' : '#181818'};
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

export const GamingBanner = styled.div`
  background-color: ${props =>
    props.change === 'light' ? '#cccccc' : '#231f20'};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    padding: 7px 40px 7px 40px;
  }

  @media (max-width: 767px) {
    padding: 7px 20px 7px 20px;
  }
`

export const GamingListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-between;
  align-items: center;
`

export const GamingPara = styled.p`
  background-color: ${props =>
    props.change === 'light' ? '#cbd5e1' : '#000000'};
  border-radius: 50px;
  margin-right: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 767px) {
    padding: 15px;
  }
`

export const GamingName = styled.h1`
  color: ${props => (props.change === 'light' ? '#000000' : '#ffffff')};

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 767px) {
    font-size: 28px;
  }
`

export const GamingIcon = styled(FaGamepad)`
  color: red;
  font-size 36px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const GamingUnorderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  max-width: 100%;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 7px 20px 7px 20px;
  border-radius: 8px;
  border: 0px;
  cursor: pointer;
`

export const FailureImage = styled.img`
  width: 30%;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.change === 'light' ? '#212121' : '#ffffff')};
`

export const FailurePara = styled.p`
  color: ${props => (props.change === 'light' ? '#212121' : '#ffffff')};
`
