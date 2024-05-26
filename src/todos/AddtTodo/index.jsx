import { useState } from "react";
import PropTypes from 'prop-types';


export function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo(title);
      setTitle('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  
  AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  
  function SearchTodo({ searchTodo }) {
    return (
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => searchTodo(e.target.value)}
      />
    );
  }
  
  SearchTodo.propTypes = {
    searchTodo: PropTypes.func.isRequired,
  };