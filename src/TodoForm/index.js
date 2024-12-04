import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (errorMessage) {
      setErrorMessage(''); // Limpia el mensaje de error al escribir
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!newTodoValue.trim()) {
      setErrorMessage('No puedes añadir un TODO vacío.'); // Establecer mensaje de error
      return;
    }
    addTodo(newTodoValue); // Añadir el TODO si es válido
    setOpenModal(false); // Cerrar el modal solo si el TODO es válido
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      {/* Mostrar mensaje de error si existe */}
      {errorMessage && <p className="TodoForm-error">{errorMessage}</p>}
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
