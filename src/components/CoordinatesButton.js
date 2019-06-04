// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{


  renderClick = (e) => {
    var coord = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coord)
  }

  render(){
    return(
      <div>
        <button onClick={this.renderClick}></button>
      </div>
    )
  }
}
