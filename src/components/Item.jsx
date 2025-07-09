function Item({ todo, removeTodo, toggleTodo }) {
    return (
        <li key={todo.id}>
            <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    )
}

export default Item
