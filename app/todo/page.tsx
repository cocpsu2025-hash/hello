import { URL } from "./constant"

export default async function Todo() {

    const data = await fetchTodo()
    if ( !data ) {
        return <p className="text-red-500 font-xl font-bold">Fetch Error!!</p>
    }
        
    

    return <>
        Hello
        {JSON.stringify(data)}
    </>
}

async function fetchTodo() {
    try {
        return await (await fetch(URL)).json()
    }
    catch {
        return null
    }
}