import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
    return (
        <div className="empty-todos-container">
            <p className="empty-todos-message">✨ ¡Crea tu primer TODO y haz que tu día sea más productivo! ✨</p>
        </div>
    );
}

export { EmptyTodos };