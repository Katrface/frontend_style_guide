import axios from 'axios'

const BACKEND_0_BASE_URL = `${ENTRY_POINT}/backend0`
const GRAPHQL = `${BACKEND_0_BASE_URL}/graphql`
const JSON_RPC = `${BACKEND_0_BASE_URL}/api/jsonrpc`
const JSON_RPC_V2 = `${BACKEND_0_BASE_URL}/api/v2/jsonrpc`

export const BACKEND_0_URL = {
    BASE: BACKEND_0_BASE_URL,
    GRAPHQL,
    JSON_RPC,
    JSON_RPC_V2
}

const httpClient = axios.create()
// указать необходимые interceptor-ы


// если есть какие-то вспомогательные классы для api
const graphQlClient = new GraphqlApiClient({url: BACKEND_0_URL.GRAPHQL})
const jsonRpcClient = null
const jsonRpcV2Client = null

export {
    httpClient,
    graphQlClient,
    jsonRpcClient,
    jsonRpcV2Client
}