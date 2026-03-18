// import { useActionState } from "react"
import { URL } from "../constant"

export default async function EditTodo({ params }: { params: Promise<{ id: string }> }) {

    // const id = (await params).id
    const { id } = (await params)  // destructuring

    const todo = await (await fetch(`${URL}/${id}`)).json()

    console.log("Todo: ", todo)

    // const [state, action] = useActionState(updateTodo, {})

    return <> ID: {id}
        <h1>Edit Todo</h1>
        <div>
            <form action="/">
                <input
                    className="border p-2 m-2"
                    type="text" name="task" defaultValue={todo.task} />
                <input className="border p-2 m-2"
                    type="number" name="time" defaultValue={todo.time} />
                <button className="border p-2 m-2"
                    type="submit">Update</button>
            </form>
        </div>
    </>
}