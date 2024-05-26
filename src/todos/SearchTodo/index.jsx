import PropTypes from 'prop-types';

export function SearchTodo({ searchTodo }) {
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
  