import Form from './components/Form'
import List from './components/List'
import { useTodos } from './hooks/useTodos'
import './App.css'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <div className="todo-app">
            <div>
                <h1 className="title">Todo List</h1>
                <Form addTodo={addTodo} />
                <List todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            </div>
        </div>
    )
}

export default App
