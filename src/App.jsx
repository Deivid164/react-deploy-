import { list } from "./list"
import { TaskList } from "./components/TaskList";
import { FormList } from "./components/FormList";
import { useState, useEffect } from "react"

export const App = () => {

  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(list)
  }, [])

  const createTask = (e) => { // funcion para pasarle el arreglo a formList y este le insertara datos y despues lo devuelve a App y este llena el arreglo
    setTask([...task, {
      id: task.length,
      title: e.title,
      description: e.description
    }])
  }

  const deleteTask = (taskId) => {
    setTask(task.filter((tasks) => tasks.id !== taskId))
  }

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <FormList createTasks={createTask} />
        <TaskList tasks={task} deleteTasks={deleteTask} />
      </div>
    </main>
  )
}
