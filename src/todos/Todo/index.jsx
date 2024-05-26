import { useState } from "react";
import { AddTodo } from "../AddtTodo";
import { SearchTodo } from "../SearchTodo";
import { TodoList } from "../TodoList";
import { nanoid } from "nanoid";
import Swal from "sweetalert2";

export function Todo() {
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const addTodo = (title) => {
      if (title === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todo input cannot be empty!',
        });
        return;
      }
      const newTodo = {
        id: nanoid(),
        title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const markTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const searchTodo = (term) => {
      setSearchTerm(term);
    };
  
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <AddTodo addTodo={addTodo} />
        <SearchTodo searchTodo={searchTodo} />
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} markTodo={markTodo} />
      </div>
    );
  }