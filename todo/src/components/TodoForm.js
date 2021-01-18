import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(){
        super();
        this.state= {
            task: '',
            id: Date.now(),
            completed: false,
        }
        
    }

    handleChanges = e => {
        this.setState({
            task:e.target.value,
            id: Date.now(),
            completed: false,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state)
        this.setState({task:''})
    }

    handleClearItems =  e => {
        e.preventDefault()
        e.stopPropagation()
        this.props.handleClear()
    }
   

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>To do:</label>
                    <input name='todo' onChange={this.handleChanges} value={this.state.task} />
                    <button>Submit</button>
                    <button onClick={this.handleClearItems}>Clear</button>
                </form>
            </div>
        )
    }
}

export default TodoForm