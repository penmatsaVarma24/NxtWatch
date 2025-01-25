import {Component} from 'react'

import ReactPlayer from 'react-player'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'

import {
  HomeContainer,
  ContentContainer,
  NavContainer,
  HomeHeaderContainer,
  VideoDetailContainer,
  PlayerContainer,
  TitleItem,
  ViewsLikesContainer,
  ViewsContainer,
  LikesContainer,
  ViewItem,
  PublishItem,
  LikeItem,
  DisLikeItem,
  SavedItem,
  LikeIcon,
  DisLikeIcon,
  SavedIcon,
  LineThrough,
  ChannelContainer,
  ProfileImage,
  ChannelContentContainer,
  ChannelName,
  ChannelSubs,
  ChannelDescription,
  LoaderContainer,
} from './styled'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class VideoDetailItem extends Component {
  state = {apiStatus: apiStatusConstants.inprogress}

  componentDidMount() {
    this.renderVideoApi()
  }

  renderVideoApi = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
      }
      console.log(data)
      this.setState({
        videoItemList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoItemList} = this.state
    const {
      channel,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      description,
      videoUrl,
    } = videoItemList
    return (
      <VideoDetailContainer>
        <PlayerContainer>
          <ReactPlayer url={videoUrl} width="100%" height="80vh" />
        </PlayerContainer>
        <TitleItem>{title}</TitleItem>
        <ViewsLikesContainer>
          <ViewsContainer>
            <ViewItem>{viewCount} Views</ViewItem>
            <PublishItem>{publishedAt}</PublishItem>
          </ViewsContainer>
          <LikesContainer>
            <LikeItem>
              <LikeIcon></LikeIcon>Like
            </LikeItem>
            <DisLikeItem>
              <DisLikeIcon></DisLikeIcon>Dislike
            </DisLikeItem>
            <SavedItem>
              <SavedIcon></SavedIcon>Saved
            </SavedItem>
          </LikesContainer>
        </ViewsLikesContainer>
        <LineThrough></LineThrough>
        <ChannelContainer>
          <ProfileImage
            src={channel.profileImageUrl}
            alt={channel.name}
          ></ProfileImage>
          <ChannelContentContainer>
            <ChannelName>{channel.name}</ChannelName>
            <ChannelSubs>{channel.subscriberCount} Subscribers</ChannelSubs>
            <ChannelDescription>{description}</ChannelDescription>
          </ChannelContentContainer>
        </ChannelContainer>
      </VideoDetailContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inprogress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    console.log('Deepu')
    return (
      <HomeContainer data-testid="home">
        <HomeHeaderContainer>
          <Header />
        </HomeHeaderContainer>
        <ContentContainer>
          <NavContainer>
            <LeftNavbar />
          </NavContainer>
          {this.renderContent()}
        </ContentContainer>
      </HomeContainer>
    )
  }
}

export default VideoDetailItem
