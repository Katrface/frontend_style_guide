import {httpClient} from '../client'

export default async function updateTodo(todo) {
  const url = `todos/${todo.id}`
  const { data } = await httpClient.put(url, todo)
  return data
}
