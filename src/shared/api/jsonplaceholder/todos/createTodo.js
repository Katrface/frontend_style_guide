import { httpClient } from '../client'

export default async function createTodo(todo) {
  const url = 'todos'
  const { data } = await httpClient.post(url, todo)
  return data
}
