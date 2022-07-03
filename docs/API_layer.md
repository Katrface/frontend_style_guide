# Слой api

## Требования
- Расположение: `src/shared/api`
- Для каждого бековского сервиса своя папка (например `src/shared/api/jsonplaceholder`)
- Должен быть `index.js`, в котором перечисленны все методы api. Интерфейс импорта в других модулях:
```javascript
import { fetchTodos } from '@/shared/api/jsonplaceholder'
```
- В файле `client.js` должны располагаться url для необходимых клиентов (HTTP, GraphQL, JSON-RPC) и инициализация
  клиентов (например axios)
    - Имена для url-ов
        - BASE
        - GRAPHQL
        - JSON_RPC
    - Имена для клиентов
        - httpClient
        - graphQlClient
        - jsonRpcClient

## Пути развития
По хорошему, здесь должны быть импорты необходимых методов из пакета сгенерированного клиента (см. [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli))

## Примечание
- Внутри `api/jsonplaceholder` методы api можно группировать по контекстам (например `todos`), главное не нарушать требование по интерфейсу импорта
- Если у вас модульный монолит на backend, то можно разделить по модулям этого монолита или контекстам
