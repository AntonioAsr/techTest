import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



class Lesson extends React.Component {

  render(){
    return(
      <tr>
      <td>
          {this.props.lesson.location}
      </td>
      <td>
          {this.props.lesson.startDate}
      </td>
      <td>
          {this.props.lesson.status}
      </td>
      </tr>
    )
  }

}

export default Lesson;


/**
 *
        {this.props.lesson.route}
        {this.props.lesson.status}
 *     <tr>
        <td>{this.props.lesson.location}</td>
        <td>{this.props.lesson.status}</td>
        <td>{this.props.lesson.startDate}</td>
    </tr>
 *
 *
 *
 */