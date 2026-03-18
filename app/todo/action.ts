"use server"

import { revalidatePath } from "next/cache"
import {URL} from "./constant"

export async function addTodo(prevState: unknown, formData: FormData) {
    const task = formData.get("task") as string
    const time = Number(formData.get("time"))

    console.log(task, time)

    await fetch(URL, {
        method: "POST",
        body: JSON.stringify({task,time})
    })

    revalidatePath("/todo")
}