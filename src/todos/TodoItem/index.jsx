import PropTypes from 'prop-types';

export function TodoItem({ todo, deleteTodo, markTodo }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => markTodo(todo.id)}
        />
        {todo.title}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    );
  }
  
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
  };
  