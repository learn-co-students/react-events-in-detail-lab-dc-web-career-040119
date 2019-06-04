// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

  handleDelay = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)} , this.props.delay)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleDelay}></button>
      </div>
    )
  }
}
