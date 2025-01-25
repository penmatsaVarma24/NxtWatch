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
} from './styled'

const VideoItem = props => {
  const {videoDetails} = props
  const {channel, id, thumbnailUrl, viewCount, publishedAt, title} =
    videoDetails
  return (
    <VideoListItem>
      <LinkItem to={`/videos/${id}`}>
        <ThumbnailImage
          src={thumbnailUrl}
          alt="video thumbnail"
        ></ThumbnailImage>
        <VideoContentContainer>
          <ProfileImage
            src={channel.profileImageUrl}
            alt="channel logo"
          ></ProfileImage>
          <VideoDetailsContainer>
            <TitlePara>{title}</TitlePara>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsCountContainer>
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
