import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TodoList from './components/Todolist'



class App extends Component {


  render() {
    return (
      <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L1440,288L1440,0L0,0Z"></path></svg>
          
          <Router>
            <Switch>
              <Route exact path = "/" component = {TodoList}/> 
            </Switch>
          </Router>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L1440,288L1440,320L0,320Z"></path></svg>
      </React.Fragment>
      
    );
  }
}

export default App;

