import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignUp from './Components/SignUp'
import Login from './Components/Login'
import DashBoard from './Components/DashBoard'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={DashBoard} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
)

export default App
