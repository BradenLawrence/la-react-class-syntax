import React, { Component } from "react"

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: this.props.message,
      clickCount: 0
    }

    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount(event) {
    event.preventDefault()
    const newCount = this.state.clickCount + 1
    this.setState({clickCount: newCount})
  }

  render() {

    return(
      <div onClick={this.incrementCount}>
        <h1>Component Message: {this.state.message}</h1>
        <h1>Component Click Count: {this.state.clickCount}</h1>
      </div>
    )
  }
}

export default Message
