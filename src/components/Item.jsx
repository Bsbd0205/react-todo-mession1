function Item({ todo, removeTodo, toggleTodo }) {
    return (
        <li
            key={todo.id}
            style={{
                textDecoration: todo.checked ? 'line-through' : 'none',
            }}
        >
            <input
                type="checkbox"
                onChange={() => {
                    toggleTodo(todo.id)
                }}
                checked={todo.checked}
            />
            {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    )
}

export default Item
