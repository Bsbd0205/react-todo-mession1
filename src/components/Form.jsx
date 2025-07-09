function Form({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        addTodo(form.todo.value)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit} className="input_section">
                <input type="text" name="todo" className="input_section input" />
                <button type="submit" className="input_btn">
                    등록
                </button>
            </form>
        </>
    )
}

export default Form
