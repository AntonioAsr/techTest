import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Lesson from './Lesson';
let lessons = '../../data.json';


class LessonList extends React.Component {

  render(){
    return(
      <tbody>
        {this.props.lessons.map((lesson)=>{
          return <Lesson lesson={lesson} />
          })
        }
      </tbody>
    )
  }

}

export default LessonList;

      // <ul>
      //   {this.props.lessons.map((lesson)=>{
      //     return <Lesson lesson={lesson} />
      //     })
      //   }
      // </ul>





/**
 *
 *
constructor() {
    super();;

    axios.get('/lessons')
      .then(response => {
          this.setState({
            lessons: response.data
          })
    })

    .catch(error => {
        console.log(error)
    });
}

render() {
  return(
    <div>
      <ul>
        {
          this.state.lessons.map(location => {
          <li key={location}>{location}</li>
        })
        }
      </ul>
    </div>
  )
}


 *
 *
 *
 *
 **/