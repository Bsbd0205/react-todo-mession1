import Form from './components/Form'
import List from './components/List'
import { useTodos } from './hooks/useTodos'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <Form addTodo={addTodo} />
                <List todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            </div>
        </div>
    )
}

export default App
