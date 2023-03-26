import React from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
  const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useAction()
  const pages = [1, 2, 3, 4, 5]

  React.useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading ...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => 
        <div key={todo.id}>{todo.id} - {todo.title}</div>  
      )}
      <div style={{display: "flex"}}>
        {pages.map(p =>
          <div onClick={() => setTodoPage(p)} style={{border: p === page ? "5px solid green" : "1px solid grey", padding: 10}}>
            {p}
          </div>  
        )}
      </div>
    </div>
  )
}

export default TodoList