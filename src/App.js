import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetailItem from './components/VideoDetailItem'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/videos/:id" component={VideoDetailItem} />
    </Switch>
  </>
)

export default App
