/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import FormTodo from "./FormTodo";
import TodoListed from "./TodoListed";
import Container from "react-bootstrap/Container";

function TodoApp() {
  //STATE
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((el) => el.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let locals = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
      setTodos(locals);
    }
  };
  return (
    <>
      {
        <>
          <Container className="todo-app">
            <FormTodo setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} />
            <TodoListed todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
          </Container>
        </>
      }
    </>
  );
}

export default TodoApp;
