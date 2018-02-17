import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

export default class ImpiantoAntifurtoCollegamento extends Component {

    state = {
        stepIndex: 0,
        pstn: false,
        gsm: false,
        lan: false,
        lanTcs: false
    };

    constructor(props) {
        super(props);
    }

    change(event) {
        event.preventDefault();
        // console.log(event.target.name + " => " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Card>
                <Card>
                    <CardText>
                        <Checkbox
                            label="Linea PSTN"
                            checked={this.state.pstn}
                            onCheck={()=>{
                                this.setState((oldState) => {return {pstn: !oldState.pstn};})
                            }}
                        />
                        <TextField
                            name="numero_fisso_centrale"
                            value={this.state.numero_fisso_centrale}
                            onChange={e => this.change(e)}
                            floatingLabelText="Numero Fisso Centrale"
                            disabled={!this.state.pstn}
                        />
                    </CardText>
                </Card>
                <Card>
                    <CardText>
                        <Checkbox
                            label="Linea GSM"
                            checked={this.state.gsm}
                            onCheck={()=>{
                                this.setState((oldState) => {return {gsm: !oldState.gsm};})
                            }}
                        />
                        <TextField
                            name="gestore"
                            value={this.state.gestore}
                            onChange={e => this.change(e)}
                            floatingLabelText="Gestore"
                            disabled={!this.state.gsm}
                        />
                        <TextField
                            name="numero_sim"
                            value={this.state.numero_sim}
                            onChange={e => this.change(e)}
                            floatingLabelText="Numero della SIM"
                            disabled={!this.state.gsm}
                        />
                    </CardText>
                </Card>
                <Card>
                    <CardText>
                        <Checkbox
                            label="LAN Attiva"
                            checked={this.state.lan}
                            onCheck={()=>{
                                this.setState((oldState) => {return {lan: !oldState.lan};})
                            }}
                        />
                        <TextField
                            name="gestore_adsl"
                            value={this.state.gestore_adsl}
                            onChange={e => this.change(e)}
                            floatingLabelText="Gestore ADSL"
                            disabled={!this.state.lan}
                        />
                        <Checkbox
                            name="tcs_attivo"
                            checked={this.state.tcs_attivo}
                            onCheck={()=>{
                                this.setState((oldState) => {return {tcs_attivo: !oldState.tcs_attivo};})
                            }}
                            label="TCS Attivo"
                            disabled={!this.state.lan}
                        />
                        <TextField
                            name="ip_pubblico"
                            value={this.state.ip_pubblico}
                            onChange={e => this.change(e)}
                            floatingLabelText="Inserisci il tuo IP pubblico"
                            disabled={!this.state.lan || this.state.tcs_attivo}
                        />
                    </CardText>
                </Card>
            </Card>
        );
    }
}