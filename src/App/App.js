import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}
{
/* class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Pass:
            <input type="text" name="pass" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </body>
      </div>
    );
  }
} */
}
export default App;
