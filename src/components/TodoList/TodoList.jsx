const Todos = ({todos, onDeleteTodo}) => {
    return (
        <ul>{todos.map(({ id, text }) => {
            return (
                <li key={id} style={{border: '1px solid black', margin: 10}}>
                    <p style={{margin: 8}}>{text}</p>
                    <button type="button" onClick={() => (onDeleteTodo(id))}>Удалить</button>
                </li>
            )
        })}
        </ul>
    )
}

export default Todos;