import React, { useReducer, useState } from 'react'

const types = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    EDIT_TASK: 'EDIT_TASK',
}

const initialTasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
]

const reducer = (state, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return [...state, action.payload]
        case types.REMOVE_TASK:
            return state.filter(task => task.id !== action.payload)
        case types.EDIT_TASK:
            return state.map(task => (task.id === action.payload.id ? action.payload : task))
        default:
            return state;
    }
}

export const Tasks = () => {
    const [tasks, dispatch] = useReducer(reducer, initialTasks)
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: types.ADD_TASK, payload: { id: tasks.length + 1, text } }) //En el ID no usamos el date.now por que el reducer debe mantenerse como una funcion pura (no se deben utilizar funciones con comportamiento aleatorio)
    }
    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => dispatch({
                            type: types.REMOVE_TASK,
                            payload: task.id
                        })}
                        >Delete
                        </button>
                        <button onClick={() => dispatch({
                            type: types.EDIT_TASK,
                            payload: { ...task, text: text }
                        })}>Edit</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Task'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </form>
        </div>
    )
}
