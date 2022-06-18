import {useState} from 'react'

const initialTasks = [
    {id: 1, title: "Ir al baño"},
    {id: 2, title: "Aprender React"}
]

export const useTasks = () => {
    const [tasks, setTasks] = useState(initialTasks)

    const addTask = (newTask) => {
        newTask.id = Date.now()
        setTasks([...tasks, newTask])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
  return [tasks, addTask, removeTask]
}
