import {useContext} from 'react'

import WatchContext from '../../context/WatchContext'

import {
  VideoContainer,
  VideoImage,
  VideoContentContainer,
  TitlePara,
  ChannelName,
  ViewsCountContainer,
  ViewsPara,
  PublishPara,
  LinkItem,
} from './styled'

const TrendingVideoItem = props => {
  const {theme} = useContext(WatchContext)

  const {videoDetails} = props

  const {
    channel,
    id,
    thumbnailUrl,
    viewCount,
    publishedAt,
    title,
  } = videoDetails

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoContainer>
        <VideoImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoContentContainer>
          <TitlePara change={theme}>{title}</TitlePara>
          <ChannelName>{channel.name}</ChannelName>
          <ViewsCountContainer>
            <ViewsPara>{viewCount} Views</ViewsPara>
            <PublishPara>{publishedAt}</PublishPara>
          </ViewsCountContainer>
        </VideoContentContainer>
      </VideoContainer>
    </LinkItem>
  )
}

export default TrendingVideoItem
