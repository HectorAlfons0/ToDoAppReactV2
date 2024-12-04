import React from "react";

function TodoHeader({ children, loading }) {


  return (
    <header>
      {React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}
    </header>//nos permite convetir a un array los children ya que son varios y no pueden ser procesados por React.cloneElement
  );
}

export { TodoHeader };