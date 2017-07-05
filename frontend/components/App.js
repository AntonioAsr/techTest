import React from 'react';
import ReactDOM from 'react-dom';
import LessonList from './LessonList';
import axios from 'axios';
import { Table, Col } from 'react-bootstrap';
let lessons = require('../../data.json');
import StatusList from './StatusList';



class App extends React.Component {

render() {
//this.props.lessos is a reference to app element props
  return (
    <div >
          <Col md={4} className="scrollTable">
            <Table responsive striped bordered condensed hover >
            <thead>
            <tr>
            <th>Location</th>
            <th>Start Date</th>
            <th>Status</th>
            </tr>
            </thead>
            <LessonList lessons={this.props.lessons}/>

            </Table>
          </Col>
    </div>
  );
  }
}
ReactDOM.render(<App lessons={lessons}/>,document.getElementById('List'));

export default App;

