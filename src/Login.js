import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import './Login.css';

export default class Login extends Component {

    state = {
        username: "",
        password: "",
        dataDiNascita: new Date(),
        sesso: ""
    };

    constructor(props) {
        super(props);
        console.log("PROPS");
        console.log(props);
        this.setState({
            nome: "",
            cognome: "",
            dataDiNascita: new Date(),
            sesso: ""
        });
    }

    render() {
        return (
            <Card className="loginCard">
                <CardMedia className="loginCardMedia">
                    <img src="images/bramucci-logo-300-orizzontale2.png" alt="" />
                    {/*<img src="http://via.placeholder.com/300x150" alt="" />*/}
                </CardMedia>

                <CardText>
                    <form>
                        <TextField
                            name="username"
                            value={this.state.username}
                            onChange={e => this.change(e)}
                            floatingLabelText="E-Mail"
                        />
                        <br/>
                        <TextField
                            name="password" type="password"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                            floatingLabelText="Password"
                        />
                        <br/>
                    </form>
                </CardText>

                <CardActions className="loginActions">
                    <RaisedButton
                        style={{width: "100%"}}
                        label="Login"
                        primary={true}
                        onClick={this.handleLogin.bind(this)}
                    />
                </CardActions>
            </Card>
        );
    }
    change(event) {
        event.preventDefault();
        console.log(event.target.name + " => " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLogin(event) {
        // event.preventDefault();
        console.log(this.state);
        this.props.history.push('/me')
    }
}
