// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

  getCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>
      Coordinates
      </button>
    )
  }
}

export default CoordinatesButton
