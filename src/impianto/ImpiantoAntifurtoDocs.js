import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Description from 'material-ui/svg-icons/action/description';
import FileUpload from '../FileUpload';

export default class ImpiantoAntifurtoDocs extends Component {

    state = {
        stepIndex: 0,
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
                <p>In questa sezione puoi inserire la documentazione a corredo del tuo impianto.</p>
                <Card>
                    <CardHeader
                        title="Documento di progetto o piantina"
                        subtitle="massimo 10 file pdf o jpeg"
                        avatar={<Description/>}
                    />

                    <CardText>
                        <FileUpload accept="image/jpeg, image/png, application/pdf"/>

                        <br/>
                        <br/>
                        <br/>
                    </CardText>

                </Card>
                <Card>
                    <CardHeader
                        title="Schema elettrico"
                        subtitle="massimo 10 file pdf o jpeg"
                        avatar={<Description/>}
                    />

                    <CardText>
                        <FileUpload accept="image/jpeg, image/png, application/pdf"/>

                        <br/>
                        <br/>
                        <br/>
                    </CardText>

                </Card>
                <Card>
                    <CardHeader
                        title="Coerenza Hardware"
                        subtitle="inserisci il file pdf fatto al momento della manutenzione"
                        avatar={<Description/>}
                    />

                    <CardText>
                        <FileUpload accept="application/pdf"/>

                        <br/>
                        <br/>
                        <br/>
                    </CardText>

                </Card>
                <Card>
                    <CardHeader
                        title="LOG Eventi"
                        subtitle="inserisci il file pdf fatto al momento della manutenzione"
                        avatar={<Description/>}
                    />

                    <CardText>
                        <FileUpload accept="application/pdf"/>

                        <br/>
                        <br/>
                        <br/>
                    </CardText>

                </Card>
            </Card>
        );
    }
}