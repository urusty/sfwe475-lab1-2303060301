# Strand 1

| Question | Your answer |
| -------- | -------- |
| Method  | GET |
| Status code | 200 OK |
| Content-Type response header | application/json; charset=utf-8 |
| What is in the body? | {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
} |

2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error

| Question | Your answer |
| -------- | -------- |
| Method  | GET |
| Status code | 404 Not Found |
| Content-Type response header | application/json; charset=utf-8 |
| What is in the body? | {} |

https://jsonplaceholder.typicode.com/todos/99999

https:// - the scheme, jsonplaceholder.typicode.com - the host (the server name), /todos/99999 -  path (everything after the host)

https://jsonplaceholder.typicode.com/todos?userId=1, ?userId=1 - show all where userId equal 1. 

| Question | Your answer |
| -------- | -------- |
| Method  | POST |
| Status code | 200 OK |
| Content-Type response header | text/plain; charset=UTF-8 |
| What is in the body? | ["-1",null,[[["ANDROID_BACKUP",0],["BATTERY_STATS",0],["SMART_SETUP",0],["TRON",0]],-3334737594024971225],[],{"175237375":[10000]}] |

POST - sending some data to server and server should do something with that.(create, change, process it)

