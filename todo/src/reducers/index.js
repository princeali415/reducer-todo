import { ADD, TOGGLE, CLEAR } from '../actions'

const initialList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

const reducer = (state, action) => {
    switch(action.type){
        case(ADD):
            return([...state, action.payload]);
        case(TOGGLE):
            return state.map(item => {
                return item.id=== action.payload? {...item, completed: !item.completed} : item
            });
        case(CLEAR):
            return state.filter(item => !item.completed);
        default:
            return(state);
    }
}

export {reducer, initialList};