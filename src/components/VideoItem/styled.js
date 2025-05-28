import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    list-style-type: none;
    width: 30%;
    margin: 10px;
  }

  @media (max-width: 575px) {
    width: 100%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 48%;
    gap: 10px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VideoDetailsContainer = styled.div`
  width: 85%;
`

export const ProfileImage = styled.img`
  width: 10%;
  align-self: flex-start;
  margin-top: 30px;
`

export const TitlePara = styled.p`
  font-size: 19px;
  font-weight: bold;
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
`

export const ChannelName = styled.p`
  @media (min-width: 576px) {
    color: #64748b;
    margin-bottom: 5px;
  }

  @media (max-width: 575px) {
    display: none;
  }
`

export const ChannelSmallName = styled.p`
  @media (min-width: 576px) {
    display: none;
  }

  @media (max-width: 575px) {
    color: #64748b;
  }
`

export const ViewsCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 0px;
  margin-top: 0px;
`

export const ViewsPara = styled.p`
  color: #64748b;
`

export const PublishPara = styled.p`
  color: #64748b;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
