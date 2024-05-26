import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import { TodoItem } from '../TodoItem';
export function TodoList({ todos, deleteTodo, markTodo }) {
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            markTodo={markTodo}
          />
        ))}
      </ul>
    );
  }
  
  TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
  };