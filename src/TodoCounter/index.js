import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos,completedTodos, loading }) {

  
  return (
    <div className='TodoCounter'>
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
    Has completado {completedTodos} de {totalTodos} TODOs</h2>
    {completedTodos === totalTodos && totalTodos > 0 && (
        <h2>¡Felicidades! Has completado todas tus tareas 🎉</h2>
    )}
</div>
    
    
  );
}

export { TodoCounter };
