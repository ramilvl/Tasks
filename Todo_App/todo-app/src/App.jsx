import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('All');

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="app">
      <h1>TODO</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Create a new todo..."
        />
      </form>

      <TodoList todos={todos} toggleComplete={toggleComplete} filter={filter} />

      <div className="filters">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>
    </div>
  );
};

export default App;
