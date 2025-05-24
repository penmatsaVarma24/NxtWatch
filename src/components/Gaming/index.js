import {useContext, useState, useEffect} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'

import LeftNavbar from '../LeftNavbar'

import GamingItem from '../GamingItem'

import WatchContext from '../../context/WatchContext'

import {
  GamingContainer,
  GamingHeaderContainer,
  ContentContainer,
  NavContainer,
  GamingDisplayContainer,
  GamingListContainer,
  GamingBanner,
  GamingIcon,
  GamingPara,
  GamingName,
  LoaderContainer,
  GamingUnorderList,
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

const Gaming = () => {
  const [gamesList, setGamesList] = useState([])

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inprogress)

  const {theme} = useContext(WatchContext)

  const failureImage =
    theme === 'light'
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

  const renderGamingApi = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      console.log(data)
      setApiStatus(apiStatusConstants.success)
      setGamesList(updatedData)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    renderGamingApi()
  }, [])

  const renderSuccessView = () => (
    <>
      <GamingBanner data-testid="banner" change={theme}>
        <GamingPara change={theme}>
          <GamingIcon />
        </GamingPara>
        <GamingName change={theme}>Gaming</GamingName>
      </GamingBanner>
      <GamingListContainer>
        <GamingUnorderList>
          {gamesList.map(video => (
            <GamingItem key={video.id} videoDetails={video} />
          ))}
        </GamingUnorderList>
      </GamingListContainer>
    </>
  )

  const renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  const onClickRetry = () => {
    renderGamingApi()
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
      case apiStatusConstants.inprogress:
        return renderLoader()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <GamingContainer data-testid="gaming" change={theme}>
      <GamingHeaderContainer change={theme}>
        <Header />
      </GamingHeaderContainer>
      <ContentContainer>
        <NavContainer>
          <LeftNavbar />
        </NavContainer>
        <GamingDisplayContainer change={theme}>
          {renderContent()}
        </GamingDisplayContainer>
      </ContentContainer>
    </GamingContainer>
  )
}

export default Gaming
