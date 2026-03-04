'use client'

import { ChangeEvent, FormEvent, useState } from "react"

export default function UserPage() {

  const [form, setForm] = useState({
    name: "Jim",
    age: 32,
  })

  const [users, setUsers] = useState([
    { id: 1, name: "Warodom Werapun", age: 40 },
    { id: 2, name: "John Petruci", age: 43 },
    { id: 3, name: "Naphat Foython", age: 20 },
  ])

  const addUser = (e: FormEvent) => {
    e.preventDefault()
    console.log("Add user")
    setUsers( [...users, {
      id: users.length+1,
      name: form.name,
      age: form.age
    }] )
  }

  const deleteUser = (id: number) => {
    const tmpUsers = users.filter( (item) => ( item.id !== id ) )
    // console.log(tmpUsers)
    setUsers([...tmpUsers])
  }

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
            onClick={addUser}
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
            <button
              className="border px-2 ml-2 rounded-md"
              onClick={() => deleteUser(item.id)}
            >x</button>

          </div>)
        }
      </div>
    </div>
  )
}
