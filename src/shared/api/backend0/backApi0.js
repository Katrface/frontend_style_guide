import {httpClient, BACKEND_0_URL} from './client'

/**
 * JsDoc
 */
export default async ({
  param1,
  param2
}) => {
  const URL = `${BACKEND_0_URL.BASE}/some/${param1}` // можно вынести из функции
  const requestData = {
    param2Name: param2
  }
  const { data } = await httpClient.post(URL, requestData)
  return data
}
