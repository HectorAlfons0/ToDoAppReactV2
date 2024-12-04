import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onToggle }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'gray'} // Cambia el color según el estado
      onClick={onToggle} // Alterna el estado al hacer clic
    />
  );
}

export { CompleteIcon };
