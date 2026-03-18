'use client'

import { useActionState } from "react";
import { TodoType } from "./constant";
import { addTodo } from "./action";

export default function ListTodo({ data }:
    { data: TodoType[] }) {

    const [state, action] = useActionState(addTodo, {
        errors: {
            task: { errors: [] },
            time: { errors: [] },
        }
    })

    return <>
        <h1 className="font-xl font-bold my-4">Todo</h1>
        <hr />
        <form action={action}>
            <h1 className="font-xl my-2">Add Todo</h1>
            <div>
                <input className="border p-2 rounded" type="text" maxLength={20} name="task" placeholder="task" />
                {(state?.errors && <p className="text-red-600">{state.errors.task?.errors[0]}</p>)}
            </div>
            <div>
                <input className="border p-2 my-2 rounded" type="number" name="time" placeholder="time" />
                {(state?.errors && <p className="text-red-600">{state.errors.time?.errors[0]}</p>) }
            </div>
            <div>
                <button className="border p-2 my-2 rounded" type="submit">Add</button>
            </div>
        </form>

        <hr />


        <div>
            {
                data.map((item, index) => <div key={index}>
                    {item.id} : {item.task} : {item.time}
                </div>)
            }
        </div>
    </>
}