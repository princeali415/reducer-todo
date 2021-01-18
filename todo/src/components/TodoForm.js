import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(){
        super();
        this.state= {
            newItem:''
        }
        
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        })
    }

   

    render() {
        return (
            <div>
                <form>
                    <label>To do:</label>
                    <input
                    name='todo'
                    onChange={this.handleChanges}
                    value={this.state.newItem}
                    />
                    
                </form>
            </div>
        )
    }
}

export default TodoForm