import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

// this
/*const person = {
  name: "bipon",
  walk(){
  console.log(this);
  }
}
// person.walk();
const walk = person.walk.bind(person);
walk();
console.log(walk)
*/

// Arrow Functions
// const square = function(number){
//   return number*number;
// }

/*
const square = (number) => {
  return number*number;
}
console.log(square(5));

const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
]
// const activeJobs = jobs.filter(function(jobs){return jobs.isActive})
const activeJobs = jobs.filter((jobs) => {return jobs.isActive})
*/

// Arrow Functions and this
/*
const person = {
  talk(){
    setTimeout(function() {
      console.log('this', this)
    }, 1000)
    
  }
}
person.talk();
*/
/*
const person = {
  talk(){
    var self = this;
    setTimeout(function() {
      console.log('self', self)
    }, 1000)
    
  }
}
person.talk();
*/

const person = {
  talk(){
    var self = this;
    setTimeout(() => {
      console.log('this', this)
    }, 1000)
    
  }
}
person.talk();

ReactDOM.render(
  // <Counter />,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
