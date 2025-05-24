import {useState, useEffect, useContext} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Header from '../Header'

import VideoItem from '../VideoItem'

import LeftNavbar from '../LeftNavbar'

import WatchContext from '../../context/WatchContext'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  HomeContainer,
  ContentContainer,
  SearchContainer,
  NavContainer,
  HomeHeaderContainer,
  BannerContainer,
  BannerContentContainer,
  BannerLogo,
  BannerDescription,
  BannerButton,
  BannerClose,
  CloseLogo,
  SearchInputContainer,
  SearchInput,
  SearchLogo,
  SearchButton,
  VideosListContainer,
  VideosUnorderedList,
  LoaderContainer,
  NoSearchFoundContainer,
  NoSearchImage,
  NoSearchHeading,
  NoSearchParagraph,
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

const Home = () => {
  const [videosList, setVideosList] = useState([])

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inprogress)

  const [showBanner, setShowBanner] = useState(true)

  const [searchInput, setSearchInput] = useState('')

  const {theme} = useContext(WatchContext)

  const failureImage =
    theme === 'light'
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

  const onClickClose = () => {
    setShowBanner(!showBanner)
  }

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const renderVideosApi = async searchTerm => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchTerm}`
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
      setVideosList(updatedData)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  const onClickSearch = () => {
    renderVideosApi(searchInput)
  }

  const onClickRetry = () => {
    setSearchInput('')
    renderVideosApi('')
    console.log('saecrh input', searchInput)
  }

  useEffect(() => {
    renderVideosApi('')
  }, [])

  const renderNoSearchFoundView = () => (
    <NoSearchFoundContainer>
      <NoSearchImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
       />
      <NoSearchHeading change={theme}>No Search results found</NoSearchHeading>
      <NoSearchParagraph change={theme}>
        Try different key words or remove search filter
      </NoSearchParagraph>
      <RetryButton type="button" onClick={onClickRetry}>
        Retry
      </RetryButton>
    </NoSearchFoundContainer>
  )

  const renderSuccessView = () => {
    if (videosList.length === 0) {
      return renderNoSearchFoundView()
    }
    return (
      <VideosUnorderedList>
        {videosList.map(video => (
          <VideoItem key={video.id} videoDetails={video} />
        ))}
      </VideosUnorderedList>
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
      case apiStatusConstants.inprogress:
        return renderLoader()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  const renderVideosView = () => (
    <VideosListContainer>{renderContent()}</VideosListContainer>
  )

  return (
    <HomeContainer data-testid="home" change={theme}>
      <HomeHeaderContainer change={theme}>
        <Header />
      </HomeHeaderContainer>
      <ContentContainer>
        <NavContainer>
          <LeftNavbar />
        </NavContainer>
        <SearchContainer change={theme}>
          {showBanner && (
            <BannerContainer data-testid="banner">
              <BannerContentContainer>
                <BannerLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                 />
                <BannerDescription>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerDescription>
                <BannerButton>GET IT NOW</BannerButton>
              </BannerContentContainer>
              <BannerClose data-testid="close" onClick={onClickClose}>
                <CloseLogo />
              </BannerClose>
            </BannerContainer>
          )}
          <SearchInputContainer change={theme}>
            <SearchInput
              type="search"
              placeholder="Search"
              onChange={onChangeSearchInput}
              value={searchInput}
             />
            <SearchButton
              type="button"
              onClick={onClickSearch}
              data-testid="searchButton"
              change={theme}
            >
              <SearchLogo />
            </SearchButton>
          </SearchInputContainer>
          {renderVideosView()}
        </SearchContainer>
      </ContentContainer>
    </HomeContainer>
  )
}

export default Home
