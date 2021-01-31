import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'
import CockTailPreview from './views/CockTailPreview'
function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cocktails/:id' component={CockTailPreview} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
