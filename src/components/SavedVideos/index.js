import {useContext} from 'react'

import Header from '../Header'

import LeftNavbar from '../LeftNavbar'

import TrendingVideoItem from '../TrendingVideoItem'

import WatchContext from '../../context/WatchContext'

import {
  SavedContainer,
  SavedHeaderContainer,
  ContentContainer,
  NavContainer,
  SavedDisplayContainer,
  SavedListContainer,
  SavedBanner,
  SavedIcon,
  SavedPara,
  SavedName,
  SavedEmptyContainer,
  SavedEmptyHeading,
  SavedEmptyImage,
  SavedEmptyPara,
  SavedUnorderList,
} from './styled'

const SavedVideos = () => {
  const {theme, savedVideos} = useContext(WatchContext)

  console.log('saved videos', savedVideos.length)

  const savedVideosList = () => (
    <SavedDisplayContainer change={theme}>
      <SavedBanner data-testid="banner" change={theme}>
        <SavedPara change={theme}>
          <SavedIcon />
        </SavedPara>
        <SavedName change={theme}>Saved Videos</SavedName>
      </SavedBanner>
      <SavedListContainer>
        <SavedUnorderList>
          {savedVideos.map(video => (
            <TrendingVideoItem key={video.id} videoDetails={video} />
          ))}
        </SavedUnorderList>
      </SavedListContainer>
    </SavedDisplayContainer>
  )

  const savedEmptyList = () => (
    <SavedEmptyContainer change={theme}>
      <SavedEmptyImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <SavedEmptyHeading change={theme}>
        No saved Videos Found
      </SavedEmptyHeading>
      <SavedEmptyPara change={theme}>
        You can save your videos while watching them
      </SavedEmptyPara>
    </SavedEmptyContainer>
  )

  return (
    <SavedContainer data-testid="savedVideos" change={theme}>
      <SavedHeaderContainer change={theme}>
        <Header />
      </SavedHeaderContainer>
      <ContentContainer>
        <NavContainer>
          <LeftNavbar />
        </NavContainer>
        {savedVideos.length > 0 ? savedVideosList() : savedEmptyList()}
      </ContentContainer>
    </SavedContainer>
  )
}

export default SavedVideos
