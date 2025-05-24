import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

export const SavedContainer = styled.div`
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

export const SavedHeaderContainer = styled.div`
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

export const SavedDisplayContainer = styled.div`
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

export const SavedBanner = styled.div`
  background-color: ${props =>
    props.change === 'light' ? '#cccccc' : '#231f20'};
  width: 100%;
  padding: 7px 40px 7px 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const SavedListContainer = styled.div`
  width: 90%;
`

export const SavedPara = styled.p`
  background-color: ${props =>
    props.change === 'light' ? '#cbd5e1' : '#000000'};
  padding: 30px;
  border-radius: 50px;
  margin-right: 20px;
`

export const SavedName = styled.h1`
  font-size: 42px;
  color: ${props => (props.change === 'light' ? '#000000' : '#ffffff')};
`

export const SavedIcon = styled(FaFire)`
    color: red;
    font-size 28px;
`

export const SavedEmptyContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  margin-left: 300px;
  background-color: ${props =>
    props.change === 'light' ? '#f1f1f1' : '#181818'};
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SavedEmptyImage = styled.img`
  width: 30%;
  margin-bottom: 20px;
`

export const SavedEmptyHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
`

export const SavedEmptyPara = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
`

export const SavedUnorderList = styled.ul`
  padding-left: 0px;
  margin-top: 30px;
`
