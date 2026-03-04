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

  const [editId, setEditId] = useState(-1)

  const saveUser = (e: FormEvent) => {
    e.preventDefault()

    if (editId === -1) {
      setUsers([...users, {
        id: (users.length === 0) ? 1 : users[users.length - 1].id + 1,
        name: form.name,
        age: form.age
      }])
    } else {
      const tmpForm = {
        id: editId,
        name: form.name,
        age: form.age,
      }
      const tmpUsers = users.map((user, index) => (index === editId) ? tmpForm : user)
      setUsers([...tmpUsers])
      setForm({
        name: "Jim",
        age: 32
      })
      setEditId(-1)
    }
  }

  const deleteUser = (id: number) => {
    const tmpUsers = users.filter((item) => (item.id !== id))
    // console.log(tmpUsers)
    setUsers([...tmpUsers])
  }

  const editUser = (index: number) => {
    setForm(users[index])
    setEditId(index)
    console.log("Edit id: ", editId)
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
            onClick={saveUser}
            className="border p-2 rounded-lg mb-2"
          >
            {(editId === -1) ? "Add" : "Update"}
          </button>
        </div>
      </form>


      <div>
        {
          users.map((item, index) => <div key={index}>
            {index + 1}
            {/* {item.id} : */}
            {item.name} :
            {item.age}
            <button
              className="border px-2 ml-2 mb-2 rounded-md"
              onClick={() => editUser(index)}
            >e</button>
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
