import React from "react";
import '../styles/CreateTodoButton.css'
import { TodoContext } from "../TodoContext";

function CreateTodoButton(){
    const {openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <h2 className="CreateTodo-Title">Registra tu siguiente Tarea</h2>

            <div>
                <input placeholder='Registrar nueva tarea' className='TodoCreate-Input'/>
                <button type="button" className='TodoCreate-Button' 
                    onClick={() => setOpenModal(!openModal)}
                >
                    +
                </button>  
            </div>  
        </React.Fragment>
    )
}

export {CreateTodoButton};