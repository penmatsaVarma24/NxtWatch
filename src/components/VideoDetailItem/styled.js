import styled from 'styled-components'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.change === 'light' ? '#f9f9f9' : '#212121'};
`

export const ContentContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 65px;
`

export const VideoDetailContainer = styled.div`
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

export const NavContainer = styled.div`
  @media (min-width: 768px) {
    min-height: 92%;
    width: 20%;
    position: fixed;
    left: 0;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const HomeHeaderContainer = styled.div`
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

export const PlayerContainer = styled.div`
  width: 90%;
  margin-top: 15px;
`

export const TitleItem = styled.p`
  width: 90%;
  font-weight: bold;
  font-size: 24px;
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
`

export const ViewsLikesContainer = styled.div`
  width: 90%;
  display: flex;

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    width: 30%;
  }

  @media (max-width: 1199px) {
    width: 42%;
  }
`

export const LikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    width: 30%;
  }

  @media (max-width: 1199px) {
    width: 53%;
  }
`

export const LikeItem = styled.p`
  display: flex;
  align-items: center;
`

export const DisLikeItem = styled.p`
  display: flex;
  align-items: center;
`

export const SavedItem = styled.p`
  display: flex;
  align-items: center;
`

export const ViewItem = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : ' #94a3b8')};
`

export const PublishItem = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : ' #94a3b8')};
`

export const LikeIcon = styled(AiOutlineLike)`
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.change ? '#2563eb' : '#64748b')};
`

export const DisLikeIcon = styled(AiOutlineDislike)`
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.change ? '#2563eb' : '#64748b')};
`

export const SavedIcon = styled(BiListPlus)`
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.change ? '#2563eb' : '#64748b')};
`

export const LineThrough = styled.hr`
  border-bottom: 1px solid #94a3b8;
  width: 90%;
`

export const ChannelContainer = styled.div`
  width: 90%;
  padding: 20px 5px 20px 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

// @media (min-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//   }

//   @media (max-width: 767px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//   }

export const ChannelSubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileImage = styled.img`
  margin-right: 15px;

  @media (max-width: 767px) {
    width: 10%;
  }

  @media (min-width: 768px) {
    width: 10%;
  }
`

export const ChannelContentContainer = styled.div`
  width: 90%;
`

export const ChannelName = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
`

export const ChannelSubs = styled.p`
  color: #64748b;
`

export const ChannelDescription = styled.p`
  @media (min-width: 768px) {
    color: ${props => (props.change === 'light' ? '#1e293b' : ' #94a3b8')};
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const ChannelSmallDescription = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : ' #94a3b8')};

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    color: ${props => (props.change === 'light' ? '#1e293b' : ' #94a3b8')};
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`

export const LikeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.change ? '#2563eb' : '#64748b')};
`

export const DislikeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.change ? '#2563eb' : '#64748b')};
`

export const SaveButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: ${props => (props.change ? '#2563eb' : '#64748b')};
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
  text-align: center;
`

export const FailurePara = styled.p`
  color: ${props => (props.change === 'light' ? '#212121' : '#ffffff')};
  text-align: center;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 7px 20px 7px 20px;
  border-radius: 8px;
  border: 0px;
  cursor: pointer;
`
