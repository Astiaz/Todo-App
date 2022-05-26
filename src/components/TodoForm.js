import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, openModal, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onCancel = () => {
        setOpenModal(!openModal);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(!openModal);
    }

    return(
        <form onSubmit={onSubmit} >
            <label>...</label>
            <textarea placeholder="Cortar Platano" value={newTodoValue} onChange={onChange}/>
            <div>
                <button type='button' onClick={onCancel}>Cancelar</button>
                <button type='submit'>Agregar</button>
            </div>
        </form>
    );
}

export {TodoForm}