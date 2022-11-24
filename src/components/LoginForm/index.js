import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLoginDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      const errorMsg = data.error_msg

      this.setState({errorMessage: errorMsg})
    }
  }

  onEnterUsername = event => {
    this.setState({username: event.target.value})
  }

  onEnterUserPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-page">
        <img
          className="website-login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="login-form" onSubmit={this.onSubmitLoginDetails}>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="login-details">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onEnterUsername}
              className="input"
              type="text"
            />
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onEnterUserPassword}
              className="input"
              type="password"
            />
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
