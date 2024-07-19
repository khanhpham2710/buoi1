import "./footer.css"
import { useState } from "react"

export default function Footer() {
    const [todo, setToDo] = useState([])
    const [todoValue, setTodoValue] = useState("")


    function handleClick() {
        if (todoValue.trim() !== ""){
            setToDo([...todo, todoValue])
            setTodoValue("")
        }
    }

    return (
        <div className="footer">
            <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
            <button onClick={handleClick}>Add Todo</button>
            <ul>
                {todo.map((list,index) => (
                    <li key={index}>{list}</li>
                ))}
            </ul>
        </div>
    )
}
