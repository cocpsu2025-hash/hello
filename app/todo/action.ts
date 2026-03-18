"use server"

import { revalidatePath } from "next/cache"
import { todoSchema, URL } from "./constant"
import z from "zod"

export async function deleteTodo(id: string) {
    console.log("Id: ", id)

    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    })

    revalidatePath("/todo")
}


export async function addTodo(prevState: unknown, formData: FormData) {
    const task = formData.get("task") as string
    const time = Number(formData.get("time"))

    console.log(task, time)

    const result = todoSchema.safeParse({ task, time })
    if (!result.success) {
        console.log("TreeifyError: ", z.treeifyError(result.error).properties)
        return {
            errors: z.treeifyError(result.error).properties,
        }
    }

    await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ task, time })
    })

    revalidatePath("/todo")
}