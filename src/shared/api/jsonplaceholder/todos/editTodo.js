import {httpClient} from '../client'

export default async function editTodo(todo) {
  const url = `todos/${todo.id}`
  const { data } = await httpClient.patch(url, todo)
  return data
}
