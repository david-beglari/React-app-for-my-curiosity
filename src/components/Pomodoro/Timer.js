import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        // Initial State
        this.state = {
            alert: {
                type: '',
                message: ''
            },
            time: 0
        };

        // Defined times for work, short break and long break...
        this.times = {
            defaultTime: 1500, // 25 min
            shortBreak: 300, // 5 min
            longBreak: 900 // 15 min
        };
    }

    componentDidMount() {
        // Set default time when the component mounts
        this.setDefaultTime();
    }

    setDefaultTime = () => {
        // Default time is 25 min
        this.setState({
            time: this.times.defaultTime
        });
    };

    render() {
        const { alert: { message, type }, time } = this.state;

        return (
            <div className="Pomodoro">
                <div className={`alert ${type}`}>
                    {message}
                </div>

                <div className="timer">
                    {this.displayTimer(time)}
                </div>

                <div className="types">
                    <button
                        className="start"
                        onClick={this.setTimeForWork}
                    >
                        Start Working
                    </button>
                    <button
                        className="short"
                        onClick={this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>
                    <button
                        className="long"
                        onClick={this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
            </div>
        );
    }


    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'Working!'
            }
        });

        return this.setTime(this.times.defaultTime);
    };

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        });

        return this.setTime(this.times.shortBreak);
    };

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break!'
            }
        });

        return this.setTime(this.times.longBreak);

    }
}

export default Timer;