import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';



class Lesson extends React.Component {

  render(){
    return(
    <li>
        {this.props.lesson.location}
        {this.props.lesson.status}
        {this.props.lesson.startDate}
        {this.props.lesson.route}
    </li>
    )
  }

}

export default Lesson;


/**
 *
 *     <tr>
        <td>{this.props.lesson.location}</td>
        <td>{this.props.lesson.status}</td>
        <td>{this.props.lesson.startDate}</td>
    </tr>
 *
 *
 *
 */