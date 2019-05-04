import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

    constructor() {
        super(arguments);

        this.state = {
            name: 'Good name'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Cristina'
            });
        }, 1000);
    }

    render() {
        return (
            <div className="Home">
                <h1>Welcome to code</h1>

                <p>
                    My name is { this.state.name }
                    <a href="http://youtube.com/codejobs">Codejobs</a>.
                </p>
            </div>
        )
    }
}

export default Home;