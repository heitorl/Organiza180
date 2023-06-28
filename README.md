# Organiza180

# Cadastro de usuário

## POST /user/signup - Rota responsável pelo CADASTRO do usuário.

#### Não necessita de AUTORIZAÇÃO por token

#### Corpo da requisição:

```json
{
  "name": "heitor",
  "email": "heitor@email.com",
  "password": "12345678",
}
```

#### Corpo da resposta - STATUS CODE 201 - CREATED:

```json

{
	"name": "heitor",
	"email": "heitor@email.com",
	"id": "0e4a58bb-41cf-4f48-82a5-2e9ad0fcb574"
}
```

## POST /user/signin - Rota responsável pelo LOGIN do usuário.

#### Não necessita de AUTORIZAÇÃO por token -

#### Corpo da requisição:

```json
{
  "email": "heitor@email.com",
  "password": "12345678"
}
```

#### Corpo da resposta - STATUS CODE 200 - OK:

```json
{
	"status": 200,
	"message": {
		"user": {
			"id": "0e4a58bb-41cf-4f48-82a5-2e9ad0fcb574",
			"name": "heitor",
			"email": "heitor@email.com",
			"tasks": []
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlNGE1OGJiLTQxY2YtNGY0OC04MmE1LTJlOWFkMGZjYjU3NCIsImVtYWlsIjoiYXR1YWwzQGVtYWlsLmNvbSIsIm5hbWUiOiJhdHVhbCIsImlhdCI6MTY4Nzg3ODgxNn0.h9-_AcODBJoeULNFRoOmsisT_4PGvQI1X4PZ5fCyrjY"
	}
}
```


### Possíveis erros

### OBS: Caso o nome de uma das chaves esteja incorreta ou então não seja passada.

FORMATO DA RESPOSTA - STATUS 400 - Bad Request

#### Corpo da requisição:

```json
{
  "name": "heitor",
  "password": "12345678"
}
```

#### Corpo da resposta - STATUS CODE 400 - Bad Request:

```json
{
  "message": ["email is a required field"]
}
```

---

## USUÁRIO ADCIONANDO UMA TAREFA

### POST /task/createTask

#### Necessita de AUTORIZAÇÃO por token -

#### Corpo da requisição:

```json
{
	"description": "dormir mais cedo durante os dias",
	"dificulty": "baixa"
}
```

#### Corpo da resposta - STATUS CODE 201 - CREATED:

```json
{
	"user": {
	    "id": "0e4a58bb-41cf-4f48-82a5-2e9ad0fcb574",
			"name": "heitor",
			"email": "heitor@email.com",
	},
	"dificulty": "baixa",
  "description": "dormir mais cedo durante os dias",
	"dificulty": "baixa",
	"id": "4a9df7db-4e04-4357-be3c-20ac8ba19aed"
}
```

### Possíveis erros

### Caso a requisição seja feita sem o token do usuário

#### Corpo da resposta - STATUS CODE 401 - Unauthorized:

```json
{
  "message": "Missing authorization headers"
}
```

---

## GET /task/allTask/:userid - Rota responsável pela listagem das tarefas de um usuario

#### Necessita de AUTORIZAÇÃO por token

#### Requisição sem corpo

#### Corpo da resposta - STATUS CODE 200 - OK:

```json
{
	"user": {
      "id": "0e4a58bb-41cf-4f48-82a5-2e9ad0fcb574",
			"name": "heitor",
			"email": "heitor@email.com",
	},
	"tasks": [
		{
      "id": "4a9df7db-4e04-4357-be3c-20ac8ba19aed",
      "description": "dormir mais cedo durante os dias",
		  "dificulty": "baixa",
			"createdAt": "2023-06-27T15:13:47.809Z",
			"updatedAt": "2023-06-27T15:13:47.809Z",
		}
	]
}
```


### Possíveis erros

### Caso a requisição seja feita sem o token do usuário

#### Corpo da resposta - STATUS CODE 400 - Unauthorized:

```json
{
	"message": "Missing authorization token."
}
```


## DELETE task/delete/:id- Rota responsável pela deleção de uma tarefa.

#### OBS: PASSAR O ID DA TAREFA

#### Necessita de AUTORIZAÇÃO por token

#### Requisição sem corpo

#### Corpo da resposta - STATUS CODE 200 - OK:

```json
{
	"message": "Task deleted"
}
```


