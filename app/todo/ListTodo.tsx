import { TodoType } from "./constant";

export default function ListTodo({data} : 
        { data: TodoType[] } ) {
    return <>
        <h1>Todo</h1>
        <div>
            {
                data.map( (item, index) => <div key={index}>
                     {item.id} : {item.task} : {item.time}
                </div> )
            }
        </div>
    </>
}