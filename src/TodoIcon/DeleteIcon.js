import React, { useState } from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  const [isHovered, setIsHovered] = useState(false); // Estado para hover

  // Determinar color dinámico
  const iconColor = isHovered ? 'red' : 'gray'; // Rojo si hay hover, gris por defecto
  return (
    <TodoIcon
      type="delete"
      color={iconColor} // Pasa el color dinámico
      onClick={onDelete}
      onMouseEnter={() => setIsHovered(true)} // Activa hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva hover
    />
  );
}

export { DeleteIcon };
