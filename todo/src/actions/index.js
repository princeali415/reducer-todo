

 const addTask = str => {
    return ({type:'ADD', payload:str})
}

 const setToggle = id => {
    return({type:'TOGGLE', payload:id})
}

 const clearList = () => {
    return({type:'CLEAR'})
}

export  {addTask, setToggle, clearList }