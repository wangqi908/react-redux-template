import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  incrementAction,
  decrementAction,
  incrementActionAsync
} from '../../redux/actionCreators'

class Count extends Component {
  static propTypes = {
    num: PropTypes.number,
    incrementAction: PropTypes.func,
    decrementAction: PropTypes.func,
    incrementActionAsync: PropTypes.func
  }

  increment = () => {
    this.props.incrementAction({ val: 1 })
  }

  decrement = () => {
    this.props.decrementAction({ val: 2 })
  }

  incrementAsync = () => {
    this.props.incrementActionAsync({ val: 1 })
  }

  render() {
    const { num } = this.props
    return (
      <div>
        <span>{num}</span>&nbsp;&nbsp;
        <button onClick={this.increment}>+1</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-2</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>+1Async</button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    num: state.num
  }),
  {
    incrementAction,
    decrementAction,
    incrementActionAsync: (data) => incrementActionAsync(data, 100)
  }
)(Count)

// function mapStateToProps(state) {
//   const { num } = state
//   return { num }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     incrementAction: (data) => dispatch(incrementAction(data)),
//     decrementAction: (data) => dispatch(decrementAction(data)),
//     incrementActionAsync: (data) => dispatch(incrementActionAsync(data, 500))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Count)
