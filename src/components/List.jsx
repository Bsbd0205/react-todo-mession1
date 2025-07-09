import Item from './Item'

function List({ todos, removeTodo, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <Item key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default List
