import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Description from 'material-ui/svg-icons/action/description';
import FileUpload from '../FileUpload';

export default class ImpiantoAntifurtoDocs extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="Dichiarazione di Conformità"
                    subtitle="massimo 1 file pdf"
                    avatar={<Description/>}
                />

                <CardText>
                    <p>
                        Carica il File (in pdf) redatto dall'installatore
                        al termine dell'installazione
                    </p>
                    <FileUpload accept="application/pdf"/>

                    <br/>
                    <br/>
                    <br/>
                </CardText>
            </Card>
        );
    }
}