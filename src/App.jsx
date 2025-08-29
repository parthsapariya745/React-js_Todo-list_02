import { useState } from "react"

function App() {
  let [input, setInput] = useState("")
  let [todo, setTodos] = useState([])
  let [btn, setBtn] = useState(true)
  let [index, setIndex] = useState(null)

  let handleAddOrUpdate = () => {
    if (btn) {
      if (input !== "") {
        setTodos([...todo, input])
        setInput("")
      }
      else {
        alert("please enter any task!!!")
      }
    }
    else {
      todo[index] = input
      setTodos([...todo])
      setBtn(true)
      setInput("")
    }
  }

  let handleClearAll = () => {
    setTodos([])
  }

  let handleEdit = (i) => {
    setInput(todo[i])
    setBtn(false)
    setIndex(i)
  }

  let handleDelete = (i) => {
    setTodos(todo.filter((_, j) => i !== j))
  }
  
  return (
    <div className="min-h-screen w-full bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-[480px] bg-zinc-800 shadow-lg rounded-2xl p-6 border border-zinc-700">
        <h1 className="text-2xl font-semibold text-white mb-4">Todo List</h1>
        <div className="btn flex gap-2 mb-4">
          <input type="text" placeholder="Enter your task..." value={input} onChange={(e)=> setInput(e.target.value)} className="flex-1 px-4 py-2 border border-zinc-600 rounded-xl bg-zinc-700 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          <button onClick={handleAddOrUpdate} className="px-4 py-2 cursor-pointer bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">{btn ? "Add" : "Update"}</button>
          <button onClick={handleClearAll} className="px-4 py-2 cursor-pointer bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition">Clear All</button>
        </div>
        <ul className="space-y-2">
          {todo.map((todo, i) => (
            <li key={i} className="flex items-center justify-between px-4 py-2 border border-zinc-600 rounded-xl bg-zinc-700 hover:bg-zinc-600">
              <span className="text-white">{todo}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => handleEdit(i)} className="px-3 py-1.5 cursor-pointer text-white text-sm rounded-lg transition bg-blue-600 hover:bg-blue-700">Edit</button>
                <button onClick={() => handleDelete(i)} className="px-3 py-1.5 cursor-pointer text-white text-sm rounded-lg transition bg-red-600 hover:bg-red-700">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default App