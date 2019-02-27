import React from 'react'
import './../Styles.css'


class Square extends React.Component {

  render(props) {
    return (
      <button
        className="square"
        onClick={() => this.props.testing()}
        >
        {this.props.value}
      </button>
    );
  }
}
export default Square;
