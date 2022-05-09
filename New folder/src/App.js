import logo from './logo.svg';
import './App.css';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';

function App() {
  return (
    <div className="App">
      <TodoHeader title="My Todo App"/>
      <TodoBody />
    </div>
  );
}

export default App;
