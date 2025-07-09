import { useRef, useState, useEffect } from 'react'
import { getStorage, setStorage } from '../utils/storage'

export function useTodos() {
    const [todos, setTodos] = useState(getStorage)

    useEffect(() => {
        setStorage(todos)
    }, [todos])

    const lastId = useRef(4)

    useEffect(() => {
        if (todos.length > 0) {
            const maxId = Math.max(...todos.map((todo) => todo.id))
            lastId.current = maxId + 1
        } else {
            lastId.current = 1
        }
    }, [todos])

    const addTodo = (text) => {
        const todo = { id: lastId.current, text, checked: false }
        setTodos([...todos, todo])
        lastId.current++
    }

    const removeTodo = (seletedId) => {
        const filterTodos = todos.filter((todo) => todo.id != seletedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
        console.log(toggleTodo)
    }

    return { todos, addTodo, removeTodo, toggleTodo }
}
