import {useState, useEffect, useContext} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'

import LeftNavbar from '../LeftNavbar'

import TrendingVideoItem from '../TrendingVideoItem'

import WatchContext from '../../context/WatchContext'

import {
  TrendingContainer,
  TrendingHeaderContainer,
  ContentContainer,
  NavContainer,
  TrendingDisplayContainer,
  TrendingListContainer,
  TrendingBanner,
  TrendingIcon,
  TrendingPara,
  TrendingName,
  LoaderContainer,
  TrendingUnorderList,
  RetryButton,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
} from './styled'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

const Trending = () => {
  const [trendingVideosList, setTrendingVideosList] = useState([])

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inprogress)

  const {theme} = useContext(WatchContext)

  const failureImage =
    theme === 'light'
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

  const renderTrendingApi = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(video => ({
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      setApiStatus(apiStatusConstants.success)
      setTrendingVideosList(updatedData)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    renderTrendingApi()
  }, [])

  const renderSuccessView = () => (
    <>
      <TrendingBanner data-testid="banner" change={theme}>
        <TrendingPara change={theme}>
          <TrendingIcon />
        </TrendingPara>
        <TrendingName change={theme}>Trending</TrendingName>
      </TrendingBanner>
      <TrendingListContainer>
        <TrendingUnorderList>
          {trendingVideosList.map(video => (
            <TrendingVideoItem key={video.id} videoDetails={video} />
          ))}
        </TrendingUnorderList>
      </TrendingListContainer>
    </>
  )

  const renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  const onClickRetry = () => {
    renderTrendingApi()
  }

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
    <TrendingContainer data-testid="trending" change={theme}>
      <TrendingHeaderContainer change={theme}>
        <Header />
      </TrendingHeaderContainer>
      <ContentContainer>
        <NavContainer>
          <LeftNavbar />
        </NavContainer>
        <TrendingDisplayContainer change={theme}>
          {renderContent()}
        </TrendingDisplayContainer>
      </ContentContainer>
    </TrendingContainer>
  )
}

export default Trending
