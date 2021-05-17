import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Header } from './components'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
