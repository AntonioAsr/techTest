import React from 'react';
import ReactDOM from 'react-dom';
import LessonList from './LessonList';
import axios from 'axios';



class App extends React.Component {

 constructor(props) {
    super(props);

    this.state = {          //equivalent to set initial state
      lessons: props.lessons
    };
  }

  setLessons() {
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

componentDidMount(){
    this.setLessons();
}

render() {
  if(!this.state.lessons || this.state.lessons.length === 0) return <p>Please wait while loading data ...</p>
  return (
            <div>
                <h1>Contact List</h1>
                <LessonList lessons={this.state.lessons} />
            </div>
  );
}
}


App.defaultProps = {
   lessons: null
};



ReactDOM.render(<App/>,document.getElementById('List'));

export default App;

