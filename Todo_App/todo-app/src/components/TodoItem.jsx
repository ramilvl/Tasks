import React from 'react';

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
