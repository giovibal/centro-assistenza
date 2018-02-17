import React, {Component} from 'react'
import Dropzone from 'react-dropzone';

export default class FileUpload extends Component {

    center = {
        display: "block",
        margin: "1em auto",
        width: "80%",
        textAlign: "center"
    };

    constructor(props) {
        super(props);
        this.state = {
            accepted: [],
            rejected: []
        }
    }

    onDrop(accepted, rejected) {
        this.setState({
            accepted,
            rejected
        });
    }

    render() {
        return (
            <section>
                <div className="dropzone">
                    <Dropzone
                        accept={this.props.accept || "image/jpeg, image/png, application/pdf"}
                        onDrop={(accepted, rejected) => { this.onDrop(accepted, rejected); }}
                    >
                        <img src="images/upload.svg" style={this.center}/>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Accepted files</h2>
                    <ul>
                        {
                            this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    <h2>Rejected files</h2>
                    <ul>
                        {
                            this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </section>
        );
    }
}