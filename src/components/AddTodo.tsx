import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store'

export function AddTodo() {
  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState('')

  function handleAddTodo(e: FormEvent) {
    e.preventDefault()

    dispatch(add({ newTodo }))
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="New Todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
