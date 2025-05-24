import {useContext} from 'react'

import WatchContext from '../../context/WatchContext'

import {
  VideoContainer,
  VideoImage,
  VideoContentContainer,
  TitlePara,
  ViewsCountContainer,
  ViewsPara,
  LinkItem,
} from './styled'

const GamingItem = props => {
  const {theme} = useContext(WatchContext)

  const {videoDetails} = props

  const {id, thumbnailUrl, viewCount, title} = videoDetails

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoContainer>
        <VideoImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoContentContainer>
          <TitlePara change={theme}>{title}</TitlePara>
          <ViewsCountContainer>
            <ViewsPara>{viewCount} Watch WorldWide</ViewsPara>
          </ViewsCountContainer>
        </VideoContentContainer>
      </VideoContainer>
    </LinkItem>
  )
}

export default GamingItem
