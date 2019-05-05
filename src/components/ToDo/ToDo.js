import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import './ToDo.css';

class ToDo extends Component {

    constructor() {
        super();

        console.log('constructor');
        this.state = {
            task: '',
            items: []
        };
    }

    componentWillMount() {
        console.log('componentWillMount');

        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: 'Pay the rent',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        });
    }

    render() {
        console.log('render');

        return (
            <div className="Todo">
                <h1>New Task:</h1>

                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value={this.state.task}
                        onChange={this.handleOnChange}
                    />
                </form>

                <List items={this.state.items}
                      markAsCompleted={this.markAsCompleted}
                      removeTask={this.removeTask}
                />
            </div>
        );
    }

    handleOnChange = e => {
        const { target: { value } } = e;

        // Updating our task state with the input value...
        this.setState({
            task: value
        });
    };

    handleOnSubmit = e => {
        e.preventDefault();

        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            });
        }
    };

    markAsCompleted = id => {
        const foundTask = this.state.items.find(
            task => task.id === id
        );

        foundTask.completed = true;
        this.setState({
            items: [
                ...this.state.items,
                ...foundTask
            ]
        });
    };

    removeTask = id => {
        // Filtering the tasks by removing the specific task id...
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );

        // Updating items state...
        this.setState({
            items: filteredTasks
        });
    }
}

export default ToDo;