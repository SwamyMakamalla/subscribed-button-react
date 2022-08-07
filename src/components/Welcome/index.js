// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: true,
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state

    let authButton
    if (isSubscribe === true) {
      authButton = (
        <button className="button" type="button" onClick={this.onSubscribed}>
          subscribe
        </button>
      )
    } else {
      authButton = (
        <button className="button" type="button" onClick={this.onSubscribe}>
          subscribed
        </button>
      )
    }

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}
export default Welcome
