import React from 'react'
import { useTasks } from './hooks/useTasks'



export const Tasks = () => {
    const [tasks, addTask, removeTask] = useTasks()
  return (
    <div>
        <h1>Tareas</h1>
        <button onClick={()=> addTask({title: "Nueva Tarea"})}>Add</button>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title}
                    <button onClick={()=>removeTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
