import {Component} from 'react'

import Header from '../Header'
import VideoItem from '../VideoItem'
import LeftNavbar from '../LeftNavbar'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

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
} from './styled'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.inprogress,
  }

  componentDidMount() {
    this.renderVideosApi()
  }

  onClickClose = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.renderVideosApi()
  }

  renderVideosApi = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      console.log(updatedData)
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosUnorderedList>
        {videosList.map(video => (
          <VideoItem key={video.id} videoDetails={video} />
        ))}
      </VideosUnorderedList>
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
    const {showBanner} = this.state
    return (
      <HomeContainer data-testid="home">
        <HomeHeaderContainer>
          <Header />
        </HomeHeaderContainer>
        <ContentContainer>
          <NavContainer>
            <LeftNavbar />
          </NavContainer>
          <SearchContainer>
            {showBanner && (
              <BannerContainer data-testid="banner">
                <BannerContentContainer>
                  <BannerLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  ></BannerLogo>
                  <BannerDescription>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </BannerDescription>
                  <BannerButton>GET IT NOW</BannerButton>
                </BannerContentContainer>
                <BannerClose data-testid="close" onClick={this.onClickClose}>
                  <CloseLogo></CloseLogo>
                </BannerClose>
              </BannerContainer>
            )}
            <SearchInputContainer>
              <SearchInput
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              ></SearchInput>
              <SearchButton
                type="button"
                onClick={this.onClickSearch}
                data-testid="searchButton"
              >
                <SearchLogo></SearchLogo>
              </SearchButton>
            </SearchInputContainer>
            <VideosListContainer>{this.renderContent()}</VideosListContainer>
          </SearchContainer>
        </ContentContainer>
      </HomeContainer>
    )
  }
}

export default Home
