import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfileEditor from './ProfileEditor';
import Login from './Login';
import Home from './Home';
import DatiImpiantoAntifurto from './DatiImpiantoAntifurto';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import ConditionalForm from "./ConditionalForm";


class App extends Component {

  render() {
      return (
          <Router>
              <MuiThemeProvider>
                  <div>
                      <Paper zDepth={2}>
                          <FlatButton label="Home" href="/"/>
                          <FlatButton label="Login" href="/login"/>
                          <FlatButton label="My Profile" href="/me"/>
                          <FlatButton label="Dati Impianto" href="/impianto"/>
                      </Paper>

                      <Divider/>

                      <Paper zDepth={2}>
                          <Route exact path="/" render={(props) => <Home {...props} />} />
                          <Route path="/login" render={(props) => <div className="center"><Login {...props} /></div>} />
                          <Route path="/me" render={(props) => <ProfileEditor {...props}/>}/>
                          <Route path="/impianto" render={(props) => <DatiImpiantoAntifurto {...props} />}/>
                          <Route path="/test" render={(props) => <ConditionalForm {...props} />}/>
                      </Paper>
                  </div>
              </MuiThemeProvider>
          </Router>
      );
  }
}

export default App;
