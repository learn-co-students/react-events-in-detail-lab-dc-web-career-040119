import React from 'react'

export default class DelayedButton extends React.Component {


  handleClick = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render() {
    const delay = this.props.delay
    return (
      <div>
        <button onClick={this.handleClick}>b</button>
      </div>
    );
  }
}
