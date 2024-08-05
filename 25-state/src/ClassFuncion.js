import React, { Component } from 'react'

export default class ClassFuncion extends Component {
    state = {
        count : 0,
    }

  render() {
    const {count} = this.state;
    const onClickPlus = () => {
        this.setState({count : count + 2})
    }
    const onClickMinus = () => {
        this.setState({count : count - 1})
    }
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={onClickPlus}>+2</button>
        <button onClick={onClickMinus}>-1</button>
      </div>
    )
  }
}
