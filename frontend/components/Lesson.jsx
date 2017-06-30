import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';



class Lesson extends React.Component {

  render(){
    return(
    <li>
        {this.props.lesson.location}{this.props.lesson.data}
     </li>
    )
  }

}

export default Lesson;


