import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { CreateTodoButton } from './CreateTodoButton';
import { LoadingSkeleton } from "./LoadingSkeleton";
import { Modal } from "../modal/Index";
import '../styles/App.css';

function AppUI(){

    const {
        error, loading, 
        searchedTodos, completeTodo, 
        deleteTodo, openModal, setOpenModal
    } = React.useContext(TodoContext);
    
    return(
        <React.Fragment>
            <div className='CreateTODO-Container'>
                <CreateTodoButton/>
            </div>
            <div className='TODO-Container'>
                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    {error && <p>Hubo un error inesperado</p>}
                    {loading && <LoadingSkeleton/>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea</p>}
                    {searchedTodos.map(todo => (
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
            </div>
            
            {openModal && (
                <Modal>
                    <TodoForm>

                    </TodoForm>
                </Modal>        
            )}
        </React.Fragment>
    );
}

export {AppUI};