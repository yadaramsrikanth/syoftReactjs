import {Component} from 'react'

import './index.css'

class SignUp extends Component {
  state = {
    firstname: '',
    email: '',
    password: '',
    phoneNumber: '',
    errorMsg: '',
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {firstname, email, password, phoneNumber} = this.state
    if (
      firstname === '' ||
      email === '' ||
      password === '' ||
      phoneNumber === ''
    ) {
      this.setState({errorMsg: 'Input Fields are Empty'})
    } else {
      const userregisterDetails = {
        firstname,
        email,
        password,
        phoneNumber,
        lastName: 'kumar',
        zipCode: 502801,
        city: 'Hyderabad',
      }
      const registerUrl =
        'https://syoft.dev/Api/user_registeration/api/user_registeration'
      const options = {
        method: 'POST',
        body: JSON.stringify(userregisterDetails),
      }
      const resopnse = await fetch(registerUrl, options)
      const data = await resopnse.json()
      const {history} = this.props
      history.push('/login')
    }
  }

  render() {
    const {firstname, email, password, phoneNumber, errorMsg} = this.state
    // console.log(firstname, email, password, phoneNumber)
    return (
      <div className="sign-up-main-container">
        <div className="sign-up-container">
          <form className="form-container" onSubmit={this.onSubmit}>
            <h1 className="sign-up">Sign Up</h1>
            <p className="sign-up-description">
              Enter your details below to create account and get started
            </p>
            <label className="first-name" id="first-name">
              First Name*
            </label>
            <input
              type="text"
              placeholder="Enter Your First Name..."
              htmlFor="first-name"
              className="input-element"
              onChange={this.onChangeFirstName}
              value={firstname}
            />
            <label className="first-name" id="Email">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="Enter Your Email..."
              htmlFor="Email"
              className="input-element"
              onChange={this.onChangeEmail}
              value={email}
            />

            <label className="first-name" id="password">
              Password*
            </label>
            <input
              type="password"
              placeholder="Enter Your Password..."
              htmlFor="password"
              className="input-element"
              onChange={this.onChangePassword}
              value={password}
            />

            <label className="first-name" id="phone-number">
              Phone Number*
            </label>
            <input
              type="tel"
              placeholder="Enter Your Phone Number..."
              htmlFor="phone-number"
              className="input-element"
              onChange={this.onChangePhoneNumber}
              value={phoneNumber}
            />
            <div className="terms-and-conditions-container">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                I agree to the <a href="">Terms of Service</a> and{' '}
                <a href="">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="create-account-button">
              Create Your Account
            </button>
            {errorMsg !== '' && <p className="error-message">{errorMsg}</p>}
            <div className="sign-in-container">
              <p>Already have an account?</p>
              <button type="button" className="sign-in">
                <a href="">sign In</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
