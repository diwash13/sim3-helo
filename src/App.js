import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Nav from './component/Nav/Nav'
import { withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <div className="App">
          {routes}
          <Nav location={this.props.location}/>
        </div>
    );
  }
}

export default withRouter(App);
