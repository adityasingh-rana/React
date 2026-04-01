import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBtns from './components/FilterBtns';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider >
    <div className = "main-box">
    <div className = 'todo-container'>
      <TodoInput/>
    </div>
    <hr />
    <FilterBtns />
    <hr />
    <TodoList/>
    </div>
    </ContextProvider>
  );
}

export default App;
