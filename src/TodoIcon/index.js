import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" style={{ fill: color }} /> // Aplica color dinámico aquí
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" style={{ fill: color }} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick, onMouseEnter, onMouseLeave }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter} // Detecta cuando el mouse entra
      onMouseLeave={onMouseLeave} // Detecta cuando el mouse sale
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
