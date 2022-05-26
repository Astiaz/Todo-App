import React from "react";
import '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    };

    return(
        <div>
            <input placeholder='Buscar' className='TodoSearch-Input'
                onChange={onSearchValueChange}
                value = {searchValue}
            />
            <button type="button" className='TodoSearch-Button' 
                onClick={() => console.log('click')}
            >
                +
            </button>    
        </div>
    )
}

export {TodoSearch}