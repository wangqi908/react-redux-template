import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { addAction, incrementAction, addActionAsync } from '@/store/actions'

class App extends Component {
  render() {
    const { num, addAction, incrementAction, addActionAsync } = this.props

    return (
      <div className="App">
        <Button onClick={() => addAction(1)}>+</Button>
        <Button onClick={() => addActionAsync(1)}>异步+</Button>
        <span>{num}</span>
        <Button onClick={() => incrementAction(2)}>-</Button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    num: state.counter.num
  }
}

export default connect(mapState, {
  addAction,
  incrementAction,
  addActionAsync
})(App)
