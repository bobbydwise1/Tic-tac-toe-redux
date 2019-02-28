import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Game from './Game';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render(){

    return(
      <div>
          <Switch>
      <Route exact path='/' component={Game} />
      </Switch>
        </div>
    )
  }
}
export default connect() (App);
