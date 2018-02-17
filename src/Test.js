import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {address: "Test"},
            loading: false
        };
    }

    componentDidMount() {
        this.setState({data: {address: "Test"}, loading: false});
    }

    render() {
        let loadingState = "Load Data";
        if(this.state && this.state.loading) {
            loadingState = "Loading ...";
        } else {
            loadingState = "Load Data";
        }

        return (
            <div>
                <p>{this.state.data.address}</p>
                <div>{this.props.children}</div>
                <button onClick={event => this.loadData(event)}>
                    {loadingState}
                </button>
            </div>
        );
    }

    loadData = function(e) {
        e.preventDefault();
        console.log("loading data ...");
        this.setState({loading: true});
        // fetch("data.json").then(value => {
        fetch("/users/2").then(value => {
            value.json().then(json => {
                console.log(json);
                this.setState({data: json, loading: false});
            }).catch(reason => {
                console.log(reason);
                this.setState({data: {address: reason.message}, loading: false});
            });
        });
    };
}

export default Test;