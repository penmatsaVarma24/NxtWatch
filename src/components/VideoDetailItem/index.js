import {useState, useEffect, useContext} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'

import LeftNavbar from '../LeftNavbar'

import WatchContext from '../../context/WatchContext'

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
  LikeButton,
  DislikeButton,
  SaveButton,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  ChannelSmallDescription,
  ChannelSubContainer,
} from './styled'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

const VideoDetailItem = props => {
  const [isLike, setIsLike] = useState(false)

  const [isDislike, setIsDislike] = useState(false)

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inprogress)

  const [videoItemList, setVideoItemList] = useState({})

  const {theme, savedVideos, setSavedVideos} = useContext(WatchContext)

  const [isSaved, setIsSaved] = useState(false)

  const playerHeight = window.innerWidth <= 1200 ? '40vh' : '80vh'

  const failureImage =
    theme === 'light'
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

  const onClickLike = () => {
    setIsLike(prevState => !prevState)
    setIsDislike(false)
  }

  const onClickDislike = () => {
    setIsDislike(prevState => !prevState)
    setIsLike(false)
  }

  const onClickSave = () => {
    const isAlreadySaved = savedVideos.some(
      video => video.id === videoItemList.id,
    )
    console.log(isAlreadySaved)

    if (!isAlreadySaved) {
      setSavedVideos([...savedVideos, videoItemList])
      setIsSaved(true)
    } else {
      setSavedVideos(savedVideos.filter(video => video.id !== videoItemList.id))
      setIsSaved(false)
    }
  }

  const renderVideoApi = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = props
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
      setVideoItemList(updatedData)

      const isAlreadySaved = savedVideos.some(
        video => video.id === updatedData.id,
      )
      setIsSaved(isAlreadySaved)

      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    renderVideoApi()
  }, [])

  const onClickRetry = () => {
    renderVideoApi()
  }

  const renderSuccessView = () => {
    console.log(savedVideos)
    const {
      channel,
      publishedAt,
      title,
      viewCount,
      description,
      videoUrl,
    } = videoItemList

    const saveText = isSaved ? 'Saved' : 'Save'

    return (
      <VideoDetailContainer change={theme}>
        <PlayerContainer>
          <ReactPlayer url={videoUrl} width="100%" height={playerHeight} />
        </PlayerContainer>
        <TitleItem change={theme}>{title}</TitleItem>
        <ViewsLikesContainer>
          <ViewsContainer>
            <ViewItem change={theme}>{viewCount} Views</ViewItem>
            <PublishItem change={theme}>{publishedAt}</PublishItem>
          </ViewsContainer>
          <LikesContainer>
            <LikeItem>
              <LikeIcon change={isLike} />
              <LikeButton type="button" onClick={onClickLike} change={isLike}>
                Like
              </LikeButton>
            </LikeItem>
            <DisLikeItem>
              <DisLikeIcon change={isDislike} />
              <DislikeButton
                type="button"
                onClick={onClickDislike}
                change={isDislike}
              >
                Dislike
              </DislikeButton>
            </DisLikeItem>
            <SavedItem>
              <SavedIcon change={isSaved} />
              <SaveButton type="button" onClick={onClickSave} change={isSaved}>
                {saveText}
              </SaveButton>
            </SavedItem>
          </LikesContainer>
        </ViewsLikesContainer>
        <LineThrough />
        <ChannelContainer>
          <ChannelSubContainer>
            <ProfileImage src={channel.profileImageUrl} alt="channel logo" />
            <ChannelContentContainer>
              <ChannelName change={theme}>{channel.name}</ChannelName>
              <ChannelSubs change={theme}>
                {channel.subscriberCount} Subscribers
              </ChannelSubs>
              <ChannelDescription change={theme}>
                {description}
              </ChannelDescription>
            </ChannelContentContainer>
          </ChannelSubContainer>
          <ChannelSmallDescription change={theme}>
            {description}
          </ChannelSmallDescription>
        </ChannelContainer>
      </VideoDetailContainer>
    )
  }

  const renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  const renderFailureView = () => (
    <FailureContainer>
      <FailureImage src={failureImage} alt="failure view" />
      <FailureHeading change={theme}>Oops! Something Went Wrong</FailureHeading>
      <FailurePara change={theme}>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <RetryButton onClick={onClickRetry}>Retry</RetryButton>
    </FailureContainer>
  )

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inprogress:
        return renderLoader()
      default:
        return null
    }
  }

  return (
    <HomeContainer data-testid="videoItemDetails" change={theme}>
      <HomeHeaderContainer change={theme}>
        <Header />
      </HomeHeaderContainer>
      <ContentContainer>
        <NavContainer>
          <LeftNavbar />
        </NavContainer>
        {renderContent()}
      </ContentContainer>
    </HomeContainer>
  )
}

export default VideoDetailItem
