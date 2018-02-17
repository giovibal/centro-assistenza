import React, {Component} from 'react';
import {
    Step,
    Stepper,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import ImpiantoAntifurtoCollegamento from "./impianto/ImpiantoAntifurtoCollegamento";
import ImpiantoAntifurtoDocs from "./impianto/ImpiantoAntifurtoDocs";
import ImpiantoAntifurtoDichiarazioneConf from "./impianto/ImpiantoAntifurtoDichiarazioneConf";

export default class DatiImpiantoAntifurto extends Component {

    state = {
        stepIndex: 0,
    };

    constructor(props) {
        super(props);
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        return (
            <div style={{margin: '12px 0', textAlign:"right"}}>
                {step > 0 && (
                    <FlatButton
                        label="Indietro"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
                <RaisedButton
                    label="Procedi"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{marginRight: 12}}
                />
            </div>
        );
    }

    change(event) {
        event.preventDefault();
        // console.log(event.target.name + " => " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {stepIndex} = this.state;

        return (
            <Card>
                <Stepper
                    activeStep={stepIndex}
                    linear={false}
                    orientation="vertical"
                >
                    <Step>
                        <StepButton onClick={() => this.setState({stepIndex: 0})}>
                            Collegamento Linea
                        </StepButton>
                        <StepContent>
                            <ImpiantoAntifurtoCollegamento/>
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.setState({stepIndex: 1})}>
                            Documentazione
                        </StepButton>
                        <StepContent>
                            <ImpiantoAntifurtoDocs/>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.setState({stepIndex: 2})}>
                            Dichiarazione di Conformità
                        </StepButton>
                        <StepContent>

                            <ImpiantoAntifurtoDichiarazioneConf/>

                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
            </Card>
        );
    }
}