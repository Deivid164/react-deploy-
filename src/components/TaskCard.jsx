
export const TaskCard = ({ tasks_, deleteTasks_ }) => {

  return (
    <div className="bg-gray-800 text-white mgt">
      <h1 className="text-xl font-bold capitalize">{tasks_.title}</h1>
      <h2 className="text-gray-500 text size-sm">{tasks_.description}</h2>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTasks_(tasks_.id)}>Delete</button>
      <hr />
    </div>
  )
}

