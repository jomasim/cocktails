import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'
import CockTailPreview from './views/CockTailPreview'
import CustomCockTails from './views/CustomCockTails'
function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cocktails/:id' component={CockTailPreview} exact />
        <Route path='/custom' component={CustomCockTails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
