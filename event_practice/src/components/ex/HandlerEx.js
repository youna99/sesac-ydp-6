import React, { Component } from 'react'

export default class HandlerEx extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hello World!"
        }
    }

    onClickButton = (e) => {
        this.setState({title: "Goodbye World!"})
    }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={(e) => {this.onClickButton(e)}}>클릭</button>
      </div>
    )
  }
}
