import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Header, Home } from './components'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
