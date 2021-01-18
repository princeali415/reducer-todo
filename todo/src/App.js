import TodoForm from './components/TodoForm'
import './App.css';


const initialList = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

function App() {



  return (
    <div className="App">
      <TodoForm />
      
    </div>
  );
}

export default App;
