import { useState } from "react"

export const FormList = ({ createTasks }) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const Submit = (e) => {
    e.preventDefault()

    createTasks({
      title,
      description
    })

    setTitle('')
    setDescription('')
  }

  return (
    <div className="max-w-md mx-auto">
      
      <form onSubmit={Submit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input className="bg-slate-300 p-3 w-full mb-2" type="text" placeholder="enter a task" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus />
        <textarea className="bg-slate-300 p-3 w-full mb-2" type="text" name="" id="" placeholder="enter some tasks" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  )
}
