import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, filter }) => {
  const filtered = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div>
      {filtered.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
