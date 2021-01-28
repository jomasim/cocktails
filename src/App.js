import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'
function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
