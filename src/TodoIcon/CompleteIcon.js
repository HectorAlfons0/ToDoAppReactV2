import React, { useState } from "react";
import { TodoIcon } from "./";

function CompleteIcon({ completed, onToggle }) {
  const [isHovered, setIsHovered] = useState(false); // Estado para manejar hover

  // Determinar color del ícono dinámicamente
  const iconColor = completed
    ? isHovered
      ? "red" // Rojo si está completado y hay hover
      : "green" // Verde si está completado pero no hay hover
    : isHovered
    ? "green" // Verde si NO está completado pero hay hover
    : "gray"; // Gris si NO está completado y no hay hover
  return (
    <TodoIcon
      type="check"
      color={iconColor} // Color dinámico
      onClick={onToggle} // Alterna el estado al hacer clic
      onMouseEnter={() => setIsHovered(true)} // Activar hover
      onMouseLeave={() => setIsHovered(false)} // Desactivar hover
    />
  );
}

export { CompleteIcon };
