import React from 'react'

export default class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props);
    // this.coordinates = this.coordinates.bind(this)
  }


  coordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
}

  render() {
    return (
      <div>
        <button onClick={this.coordinates}>a</button>
      </div>
    );
  }
}
