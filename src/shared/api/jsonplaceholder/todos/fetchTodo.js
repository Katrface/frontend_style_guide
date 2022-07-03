import { httpClient } from '../client'

export default async function fetchTodo({id}) {
  const url = `todos/${id}`
  const { data } = await httpClient.get(url)
  return data
}
