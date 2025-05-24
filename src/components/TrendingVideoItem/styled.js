import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  list-style-type: none;
`

export const VideoImage = styled.img`
  width: 45%;
`

export const VideoContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`

export const TitlePara = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
  font-size: 19px;
  font-weight: bold;
  // align-self: flex-start;
`

export const ChannelName = styled.p`
  color: #64748b;
  margin-bottom: 5px;
  align-self: flex-start;
`

export const ViewsCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 0px;
  margin-top: 0px;
  align-self: flex-start;
  width: 50%;
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
