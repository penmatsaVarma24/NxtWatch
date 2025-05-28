import {useContext} from 'react'

import WatchContext from '../../context/WatchContext'

import {
  VideoListItem,
  ThumbnailImage,
  VideoContentContainer,
  VideoDetailsContainer,
  ProfileImage,
  TitlePara,
  ChannelName,
  ViewsCountContainer,
  ViewsPara,
  PublishPara,
  LinkItem,
  ChannelSmallName,
} from './styled'

const VideoItem = props => {
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
    <VideoListItem>
      <LinkItem to={`/videos/${id}`}>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoContentContainer>
          <ProfileImage src={channel.profileImageUrl} alt="channel logo" />
          <VideoDetailsContainer>
            <TitlePara change={theme}>{title}</TitlePara>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsCountContainer>
              <ChannelSmallName>{channel.name}</ChannelSmallName>
              <ViewsPara>{viewCount} Views</ViewsPara>
              <PublishPara>{publishedAt}</PublishPara>
            </ViewsCountContainer>
          </VideoDetailsContainer>
        </VideoContentContainer>
      </LinkItem>
    </VideoListItem>
  )
}

export default VideoItem
