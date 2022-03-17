import React from 'react';
import style from "./crear/crear.module.css"

function Formulario({name, type, value, handle_function, error_control}) {
    return (
        <div>
            <div>
                <label >{`${name}: `}</label>
                <input type={type} value={value} name={name.toLowerCase()} onChange={handle_function} />


            </div>
            {
                error_control[name.toLowerCase()] && (
                    <p className={style.error}>{error_control[name.toLowerCase()]}</p>
                )
            }
        </div>

    )
}

export default Formulario;
