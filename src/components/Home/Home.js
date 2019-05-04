import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

    render() {
        const StyleForText = {
            color: 'red'
        };

        return (
            <div className="Home">
                <h1>Welcome to Codejobs</h1>

                <p style={StyleForText}>
                    In this recipe you will learn how to add styles to
                    components. If you want to learn more you can visit
                    our Youtube Channel at
                    <a href="http://youtube.com/codejobs">Codejobs</a>.
                </p>
            </div>
        )
    }
}

export default Home;