import { httpClient } from '../client'

export default async function fetchTodos({
  filters,
  sorts,
  limit,
  offset
}) {
  const url = 'todos'
  const { data } = await httpClient.get(url)
  return data
}
