import React, { useState } from 'react';

const TodoList = () => {

    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);




    const addTask = (event) => {

        if (event.which === 13) {

            setList([...list, inputValue]);

            setInputValue(' ');

            return
        };

    };

    const deleteTask = (index) => {
        const updatedTasks = list.filter((_, item) => item !== index);
        setList(updatedTasks);
    };
    const handleMouseOver = (e) => {
        const button = e.currentTarget.querySelector('button');
        button.style.display = 'inline-block';
    };

    const handleMouseOut = (e) => {
        const button = e.currentTarget.querySelector('button');
        button.style.display = 'none';
    };

    return (
        <div className="alert alert-warning" role="alert">
            <h1>LISTA DE TAREAS</h1>
            <h2>     || </h2>
            <h2>    \ /</h2>
        <div className="d-grid col-10 mx-auto">

            <input type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onKeyDown={addTask}
                className="list-group-item-light"
            />

            <ul className="list-group">
                {list.length === 0 ? (<li className="list-group-item-success text-start text-muted">No hay tareas. <strong>Agrega una nueva!</strong>)</li>) : (list.map((item, index) => (
                    <li
                        key={index}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        className="list-group-item-success d-flex justify-content-between"> {item}

                        <button
                            onClick={() => deleteTask(index)}
                            style={{ display: 'none', cursor: 'pointer' }}>x

                        </button>
                    </li>

                ))
                )}

            </ul>

        </div>
        </div>
    );
};

export default TodoList;