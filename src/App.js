import {useState} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import WatchContext from './context/WatchContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetailItem from './components/VideoDetailItem'
import NotFound from './components/NotFound'

import './App.css'

const App = () => {
  const [theme, setTheme] = useState('light')

  const [savedVideos, setSavedVideos] = useState([])

  return (
    <>
      <WatchContext.Provider
        value={{theme, setTheme, savedVideos, setSavedVideos}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailItem}
          />

          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </WatchContext.Provider>
    </>
  )
}

export default App

// <ProtectedRoute component={NotFound} />
