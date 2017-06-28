import React from 'react';
import ReactDOM from 'react-dom';

class Lesson extends React.Component {

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
ReactDOM.render(<Lesson name="Antonio" />, document.getElementById("app"));

export default Lesson;
