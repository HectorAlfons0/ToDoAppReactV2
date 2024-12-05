import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import './App.css'
import { EmptyTodos } from '../EmptyTodos';
import { ChangeAlert } from '../ChangeAlert';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,

  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} searchedTodos={searchedTodos}/>
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos = {searchedTodos}
        searchText = {searchValue}
        totalTodos = {totalTodos}
        onError ={() => <TodosError/>}
        onLoading ={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySeachResults = {(searchText) =>     <div className="EmptySearchResults">
          {/* Puedes usar un ícono o imagen ilustrativa */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" clip-rule="evenodd"/><path fill="currentColor" d="M11.854 4.854a.5.5 0 0 0-.707-.707L8 7.293L4.854 4.147a.5.5 0 1 0-.707.707L7.293 8l-3.146 3.146a.5.5 0 0 0 .707.708L8 8.707l3.147 3.147a.5.5 0 0 0 .707-.708L8.708 8z"/></svg>
          <p>
            No se encontraron resultados para <span>"{searchText}"</span>. 
          </p>
          <p>¡Intenta buscar algo diferente!</p>
        </div> }

        //RENDER PROP
      //   render = {todo => (
      //   <TodoItem
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     completeTodo={completeTodo} // Pasar función para alternar completado
      //     onDelete={() => deleteTodo(todo.text)}
      //   />
      // )}
      >
      {/*Render Function */}
        {todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          completeTodo={completeTodo} // Pasar función para alternar completado
          onDelete={() => deleteTodo(todo.text)}
        />
      )}
      </TodoList>

      {/* <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && totalTodos === 0 && <EmptyTodos />}
        {!loading && isSearching && searchedTodos.length === 0 && (
          <EmptySearchResults searchText={searchValue} />
        )}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={completeTodo} // Pasar función para alternar completado
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlert 
        sincronize={sincronizeTodos}
      />

    </React.Fragment>
  );
}

export default App;
