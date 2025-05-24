import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

export const TrendingContainer = styled.div`
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
  margin-top: 80px; ;
`

export const NavContainer = styled.div`
  min-height: 90vh;
  width: 20%;
  position: fixed;
  left: 0;
`

export const TrendingHeaderContainer = styled.div`
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

export const TrendingDisplayContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  margin-left: 300px;
  background-color: ${props =>
    props.change === 'light' ? '#f1f1f1' : '#181818'};
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const TrendingBanner = styled.div`
  background-color: ${props =>
    props.change === 'light' ? '#cccccc' : '#231f20'};
  width: 100%;
  padding: 7px 40px 7px 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const TrendingListContainer = styled.div`
  width: 90%;
`

export const TrendingPara = styled.p`
  background-color: ${props =>
    props.change === 'light' ? '#cbd5e1' : '#000000'};
  padding: 30px;
  border-radius: 50px;
  margin-right: 20px;
`

export const TrendingName = styled.h1`
  font-size: 42px;
  color: ${props => (props.change === 'light' ? '#000000' : '#ffffff')};
`

export const TrendingIcon = styled(FaFire)`
    color: red;
    font-size 28px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const TrendingUnorderList = styled.ul`
  padding-left: 0px;
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
  color: ${props => (props.change === 'light' ? '#f8fafc' : '#ffffff')};
`
