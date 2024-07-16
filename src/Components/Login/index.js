import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {loginEmail: '', loginPassword: '', loginErrorMsg: ''}

  onLogin = async event => {
    event.preventDefault()
    const {loginEmail, loginPassword} = this.state
    if (loginEmail === '' || loginPassword === '') {
      this.setState({loginErrorMsg: 'Input Fields are Empty'})
    } else {
      const loginUserDetails = {loginEmail, loginPassword}
      const loginUrl = 'https://syoft.dev/Api/userlogin/api/userlogin'
      const loginOptions = {
        method: 'POST',
        body: JSON.stringify(loginUserDetails),
      }
      const response = await fetch(loginUrl, loginOptions)
      const data = await response.json()
      console.log(data)

      localStorage.setItem('loginEmail', loginEmail)
      localStorage.setItem('loginPassword', loginPassword)
      const {history} = this.props
      history.push('/')
    }
  }

  onChangeLoginMail = event => {
    this.setState({loginEmail: event.target.value})
  }

  onChangeLoginPassword = event => {
    this.setState({loginPassword: event.target.value})
  }

  render() {
    const {loginEmail, loginPassword, loginErrorMsg} = this.state
    return (
      <div className="login-top-container">
        <form className="login-form-container" onSubmit={this.onLogin}>
          <h1 className="login-page-heading">Welcome Back</h1>
          <p className="login-page-description">
            Glad to see you again <br />
            Login to your account Below
          </p>
          <label className="login-page-label-element" id="login-email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email.."
            className="login-page-input-element"
            htmlFor="login-email"
            onChange={this.onChangeLoginMail}
            value={loginEmail}
          />

          <label className="login-page-label-element" id="login-Password">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Password.."
            className="login-page-input-element"
            htmlFor="login-Password"
            onChange={this.onChangeLoginPassword}
            value={loginPassword}
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {loginErrorMsg !== '' && (
            <p className="login-error-msg">{loginErrorMsg}</p>
          )}
        </form>
      </div>
    )
  }
}

export default Login
