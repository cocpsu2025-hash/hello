'use client'

import { useActionState } from "react";
import { TodoType } from "./constant";
import { addTodo } from "./action";

export default function ListTodo({data} : 
        { data: TodoType[] } ) {

    const [state, action] = useActionState(addTodo, {})

    return <>
        <h1 className="font-xl font-bold my-4">Todo</h1>
        <hr />
        <form action={action}>
            <h1 className="font-xl my-2">Add Todo</h1>
            <div>
                <input className="border p-2 rounded" type="text" name="task" placeholder="task" />
            </div>
            <div>
                <input className="border p-2 my-2 rounded" type="number" name="time" placeholder="time" />
            </div>
            <div>
                <button className="border p-2 my-2 rounded" type="submit">Add</button>
            </div>
        </form>

        <hr />


        <div>
            {
                data.map( (item, index) => <div key={index}>
                     {item.id} : {item.task} : {item.time}
                </div> )
            }
        </div>
    </>
}