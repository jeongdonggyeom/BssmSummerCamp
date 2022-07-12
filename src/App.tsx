import './App.css';
import { todoContext } from './store/todo';
import { useTodoContext } from './store/todoContext';
import TodoList from './components/todoList';
import TodoInput from './components/TodoInput';

function App() {
  const TodoContext = useTodoContext();
  return (
    <todoContext.Provider value={{ ...TodoContext }}>
      <div className='App'>
        <TodoInput/>
        <TodoList/>
      </div>
    </todoContext.Provider>
  );
}

export default App;
