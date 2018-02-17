import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import {Card, CardHeader,CardTitle,CardText} from 'material-ui/Card'


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <CardHeader
                    title="Benvenuto"
                    subtitle="in questa sezione puoi ..."
                    avatar="images/bramucci-logo-300-orizzontale2.png"
                />
                <CardText>
                    Assistenza attiva
                </CardText>
            </Paper>
        );
    }
}
