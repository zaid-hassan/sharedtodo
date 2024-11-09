import React, { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function TodoForm() {
    const [todo, setTodo] = useState("")
    // const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" value={''} onChange={(e) => {console.log(e.target.value)}} placeholder="Write Todo..." />
                <Button type="submit">Add</Button>
            </div>
            {/* <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            /> */}
            {/* <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button> */}
        </form>
    );
}

export default TodoForm;