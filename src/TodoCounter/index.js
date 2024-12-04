import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <div className="TodoCounter">
      <h1>
        Has completado <span>{completedTodos}</span> de{" "}
        <span>{totalTodos}</span> TODOs
      </h1>
      {completedTodos === totalTodos && totalTodos > 0 && (
        <h2>¡Felicidades! Has completado todas tus tareas 🎉</h2>
      )}
    </div>
  );
}

export { TodoCounter };
