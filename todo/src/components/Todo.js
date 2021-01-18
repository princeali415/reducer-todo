import React, { Component } from 'react'


export default class Todo extends Component {

    
    handleClick = () => {
        this.props.handleToggle(this.props.item.id)
    }

    render() {
        return (
            <div>
                <div onClick={this.handleClick} className={this.props.item.completed ? 'completed' : 'notCompleted'}>
                    <p>{this.props.item.task}</p>
                </div>
            </div>
        )
    }
}