import React from "react";
import Todo from "./Todo";

function TodoListed({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      {filteredTodos.map((todo) => {
        return <Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} id={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoListed;
