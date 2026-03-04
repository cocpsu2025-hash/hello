
export default function UserPage() {

  const users = [
    { id: 1, name: "Warodom Werapun", age: 40 },
    { id: 2, name: "John Petruci", age: 43 },
    { id: 3, name: "Naphat Foython", age: 20 },
  ]

  return (
    <div>
      <h1>UserPage</h1>

      <form action=""
        className="border p-4 mb-8"
      >
        <div>
          <input
            className="border p-2 text-sm text-zinc-400 mb-2 w-full"
            type="text" name="name" placeholder="name" />

        </div>
        <div>
          <input
            className="border p-2 text-sm text-zinc-400 mb-2 w-full"
            type="number" name="age" placeholder="age" />
        </div>
        <div>
          <button
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
