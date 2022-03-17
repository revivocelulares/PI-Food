import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getRecetas_por_nombre} from '../actions/index.js'


export default function NavBar({setPage}){
    const [input, setInput] = useState('');
    const dispatch = useDispatch();


    function handleOnChange(e){
        e.preventDefault();
        setInput(e.target.value);
        console.log(input)
    }

    function handleOnSubmit(e){
        e.preventDefault();
        if(!input){
          alert('Ingrese el nombre de la receta')
        } else {
        dispatch(getRecetas_por_nombre(input))
        setInput('');
        setPage(1);
      }
    }

    return <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Search Recipe..." value={input} onChange={handleOnChange} />
        <button type='submit'>Search</button>
    </form>
}
