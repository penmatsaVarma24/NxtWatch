import styled from 'styled-components'

import {IoClose} from 'react-icons/io5'
import {FaSearch} from 'react-icons/fa'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.change === 'light' ? '#f9f9f9' : '#181818'};
  padding-top: 10px;
`

export const ContentContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px; ;
`

export const SearchContainer = styled.div`
  min-height: 130vh;
  width: 80%;
  margin-left: 300px;
  background-color: #f1f1f1;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props =>
    props.change === 'light' ? 'transparent' : 'transparent'};
`

export const NavContainer = styled.div`
  min-height: 90vh;
  width: 20%;
  position: fixed;
  left: 0;
`

export const HomeHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  padding-top: 15px;
  text-align: center;
  z-index: 1000;
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#212121'};
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 26%;
  height: 25vh;
  margin-left: 20px;
  margin-top: 10px;
`

export const BannerLogo = styled.img`
  width: 40%;
`

export const BannerDescription = styled.p``

export const BannerButton = styled.button`
  background-color: transparent;
  padding: 7px 16px 7px 16px;
  border-radius: 5px;
  border: 1px solid #64748b;
`

export const BannerClose = styled.button`
  background-color: transparent;
  border: 0px;
  align-self: flex-start;
  cursor: pointer;
`

export const CloseLogo = styled(IoClose)`
  color: #000000;
`

export const SearchInputContainer = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  width: 60%;
  border: 1px solid #64748b;
  border-radius: 5px;
  background-color: ${props =>
    props.change === 'light' ? '#ffffff' : '#212121'};
`

export const SearchInput = styled.input`
  padding: 7px 16px 7px 16px;
  background-color: transparent;
  width: 93%;
  border: 0px;
  outline: none;
`

export const SearchButton = styled.button`
  width: 7%;
  padding: 6px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props =>
    props.change === 'light' ? 'transparent' : '#181818'};
`

export const SearchLogo = styled(FaSearch)`
  color: #64748b;
`

export const VideosListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const VideosUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const NoSearchFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchHeading = styled.h1`
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
`

export const NoSearchParagraph = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
`

export const NoSearchImage = styled.img`
  width: 30%;
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
