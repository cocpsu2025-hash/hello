'use client'

import { ChangeEvent, useState } from "react"

export default function UserPage() {

  const [form, setForm] = useState({
    name: "Jim",
    age: 32,
  })

  const users = [
    { id: 1, name: "Warodom Werapun", age: 40 },
    { id: 2, name: "John Petruci", age: 43 },
    { id: 3, name: "Naphat Foython", age: 20 },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log("Name: ", name, "value: ", value)

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>UserPage</h1>

      <form action=""
        className="border p-4 mb-8"
      >
        <div>
          <input
            className="border p-2 text-sm text-zinc-800 mb-2 w-full"
            type="text" name="name" placeholder="name" value={form.name}
            onChange={handleChange}
          />

        </div>
        <div>
          <input
            className="border p-2 text-sm text-zinc-8400 mb-2 w-full"
            type="number" name="age" value={form.age} placeholder="age"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            onClick={() => {
              console.log("click")
            }}
            className="border p-2 rounded-lg mb-2"
          >Add</button>
        </div>
      </form>


      <div>
        {
          users.map((item, index) => <div key={index}>
            {item.id} :
            {item.name} :
            {item.age}
          </div>)
        }
      </div>
    </div>
  )
}
