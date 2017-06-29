import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Lesson extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    axios.get('/lessons')
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    });
}

  componentDidMount(){
    //called after the component is added to the page
  }

  render() {
    return (
    <div>this.state.</div>
    );
  }

}

ReactDOM.render(<Lesson name="Antonio" />, document.getElementById("app"));

export default Lesson;
