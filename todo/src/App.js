import React, { useReducer } from 'react'
import {reducer, initialList} from './reducers/index'
import {addTask, setToggle, clearList } from './actions/index'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';



function App() {

const [state, dispatch] = useReducer(reducer, initialList)

const handleAddItem = str => {
  dispatch(addTask(str))
}

const handleToggle = id => {
  dispatch(setToggle(id))
}

const handleClear = () => {
  dispatch(clearList())
}

  return (
    <div className="App">
      <TodoForm handleAddItem={handleAddItem} handleClear={handleClear}/>
      <TodoList handleToggle={handleToggle} list={state}/>
    </div>
  );
}

export default App;
