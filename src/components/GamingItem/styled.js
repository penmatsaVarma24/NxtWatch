import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  list-style-type: none;
  padding: 15px;
`

export const VideoImage = styled.img`
  width: 100%;
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const TitlePara = styled.p`
  color: ${props => (props.change === 'light' ? '#1e293b' : '#ffffff')};
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 5px;
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
  font-size: 18px;
  width: 100%;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
