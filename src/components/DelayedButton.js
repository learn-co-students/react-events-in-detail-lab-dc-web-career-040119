// Code DelayedButton Component Here
// 1) In the components/DelayedButton.js file, create a DelayedButton React
// component
//
// 2) This component takes two props: onDelayedClick (a function), and delay (a
// number).
//
// 3) Create a button that, when clicked, will pass the click event to the
// onDelayedClick prop within a setTimeout(). The setTimeout() should be set to
// this.props.delay.

// 4) If successful, the event will be logged to the console once the timeout
// has finished.


//  current challenge: passing event to onDelayedClick without it firing.
//  SOLVED by incorporating an arrow function (since that's what they're for)
//  current challeng: 1 test remaining: pass event to callback prop
// PASS EVENT TO CALLBACK PROP

// Damn. I did it. Only thing I didn't have was event.persist(). And I didn't
// know what that was, so bully.

// +++++++++++++++++ SOLUTION

import React from 'react';

class DelayedButton extends React.Component {
  handleClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

export default DelayedButton;

//
// +++++++++++++++++ ORIGINAL
//
// import React, { Component } from 'react'
// export default class DelayedButton extends Component {
//
//   handleDelayedClick = event => {
//     setTimeout( () => {
          // this.props.onDelayedClick(event)}, this.props.delay)
//   }
//
//   render() {
//     return(
//       <button onClick={ () => {this.handleDelayedClick}}>Hey! Check Me Out!<
// button>
//     )
//   }
// }
//
