import {BrowserRouter, Route} from 'react-router-dom'

import SignUp from './Components/SignUp'
import Login from './Components/Login'
import DashBoard from './Components/DashBoard'

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={SignUp} />
  </BrowserRouter>
)

export default App
