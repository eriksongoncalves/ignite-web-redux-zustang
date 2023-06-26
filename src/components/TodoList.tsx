import { useAppSelector } from '../store'

export function TodoList() {
  const todos = useAppSelector(store => store.todo)

  return (
    <ul>
      {todos.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
