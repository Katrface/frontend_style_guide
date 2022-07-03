import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const httpClient = axios.create({
  baseURL: BASE_URL
})
// add some interceptors

export {
  httpClient
}
