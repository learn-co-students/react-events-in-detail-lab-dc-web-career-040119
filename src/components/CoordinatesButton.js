// Code CoordinatesButton Component Here
import React, {Component} from 'react'


class CoordinatesButton extends Component{

  handleClick = (event) => {
    let arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
    return arr
  }

  render(){

    return(
      <div>
        <button onClick={this.handleClick}>
        Click Me
        </button>
      </div>
    )

  }

}

export default CoordinatesButton
