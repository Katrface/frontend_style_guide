import { httpClient } from '../client'

export default async function removeTodo({id}) {
  const url = `todos/${id}`
  const { data } = await httpClient.delete(url)
  return data
}
