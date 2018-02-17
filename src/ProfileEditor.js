import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField';

export default class ProfileEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: props.nome || "Samuele",
            cognome: props.cognome || "Bramucci",
            indirizzo: props.indirizzo || "",
            email: props.email || "samuele@bramucci.com",
            password: props.password || "",
            password2: props.password2 || ""
        };
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.state.nome+" "+this.state.cognome}
                    subtitle={this.state.email}
                    avatar="images/jsa-128.jpg"/>

                <CardTitle>
                    Completa la registrazione
                </CardTitle>

                <CardText>
                        <TextField
                            name="nome"
                            value={this.state.nome}
                            onChange={e => this.change(e)}
                            floatingLabelText="Nome"
                        />
                        <TextField
                            name="cognome"
                            value={this.state.cognome}
                            onChange={e => this.change(e)}
                            floatingLabelText="Cognome"
                        />
                        <br/>
                        <TextField
                            name="indirizzo"
                            value={this.state.indirizzo}
                            onChange={e => this.change(e)}
                            floatingLabelText="Indirizzo"
                        />
                        <br/>
                        <TextField
                            name="email"
                            value={this.state.email}
                            onChange={e => this.change(e)}
                            floatingLabelText="E-Mail"
                        />
                        <br/>
                        <TextField
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                            floatingLabelText="Password"
                        />
                        <TextField
                            name="password2"
                            type="password"
                            value={this.state.password2}
                            onChange={e => this.change(e)}
                            floatingLabelText="Ripeti la Password"
                        />
                        <br/>
                </CardText>

                <CardActions align="right">
                    <RaisedButton
                        label="Annulla"
                        onClick={this.handleCancel.bind(this)}
                    />
                    <RaisedButton
                        label="Applica"
                        onClick={this.handleApply.bind(this)}
                        primary={true}
                    />
                </CardActions>
            </Card>
        );
    }
    change(event) {
        event.preventDefault();
        // console.log(event.target.name + " => " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    changeDatePicker(e, newDate) {
        // console.log("dataDiNascita => " + newDate);
        this.setState({
            dataDiNascita: newDate
        });
    }

    validate() {
        if(this.state.password != this.state.password2) {
            window.alert("Erorre, le password sono diverse!")
        }
    }

    handleApply(event) {
        // event.preventDefault();
        this.validate();
        console.log(this.state);

        this.props.history.push('/impianto');
    }
    handleCancel(event) {
        this.setState({
            nome: "",
            cognome: "",
            indirizzo: "",
            email: "",
            password: "",
            password2: "",
        });
    }
}
