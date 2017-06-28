import Lesson from './Lesson';
var axios = require ('axios');


const components = { Lesson }

axios.get('http:localhost:8080\lessons')

    .then(response => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    });

export default components;