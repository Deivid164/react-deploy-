import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, deleteTasks }) => {

  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {

        tasks.map((task) => (

          <TaskCard key={task.id} tasks_={task} deleteTasks_={deleteTasks} />

        ))
      }
    </div>
  )
}
