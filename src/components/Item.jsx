function Item({ todo, removeTodo, toggleTodo }) {
    return (
        <li key={todo.id} className="todo-item">
            <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
                className="todo-item-left"
            />
            <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="delete_btn">
                X
            </button>
        </li>
    )
}

export default Item
