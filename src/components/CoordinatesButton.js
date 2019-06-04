// Code CoordinatesButton Component Here


// Deliverables

// 1) In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
//    easy....
//
// 2) This component takes in one prop: onReceiveCoordinates. This prop is a function passed down from index.js. This function is currently just logging whatever is passed into it.

//    I had no idea how to do this. As we see, the button fires the handleClick
//    function, which is anonymized/arrowized, and contains within its body
//    the function onReceiveCoordinates, which is passed through props,
//    and receives an array which contains the event data / x and y coords.
//    Note how event is the argument of handleClick, so we can later access
//    the event methods clientX and clientY.
//
// 3) Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
//    Not much mystery here. button rendering is pretty standard. Only note is
//    that the this.handleClick calls the method defined above
//
// 4) Pass this event data in as the argument for the onReceiveCoordinates prop.
//    Already covered in 2).
//
// 5) If successful, the current x,y position of your mouse should be logged.
//    Yup. Successful behavior

import React, { Component } from 'react'
export default class CoordinatesButton extends Component {

  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return <button onClick={this.handleClick}>Coords</button>
  }

}
