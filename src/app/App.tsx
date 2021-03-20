import { Route, Switch } from 'react-router-dom'

import { Home } from 'app/pages/Home'

export const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)
