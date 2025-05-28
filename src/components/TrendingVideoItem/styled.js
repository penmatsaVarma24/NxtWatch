import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoContainer = styled.li`
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    list-style-type: none;
  }

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const VideoImage = styled.img`
  @media (min-width: 576px) {
    width: 45%;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`

export const TitlePara = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
  font-weight: bold;

  @media (max-width: 575px) {
    font-size: 19px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 19px;
  }
`

export const ChannelName = styled.p`
  @media (max-width: 575px) {
    display: none;
  }

  @media (min-width: 576px) {
    color: #64748b;
    margin-bottom: 5px;
    align-self: flex-start;
  }
`

export const ViewsCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 0px;
  margin-top: 0px;
  align-self: flex-start;
  width: 100%;
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

export const ChannelSmallName = styled.p`
  @media (min-width: 576px) {
    display: none;
  }

  @media (max-width: 575px) {
    color: #64748b;
  }
`
