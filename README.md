# Desafio W3lcome

Contém um projeto frontend de 'lista de tarefas', e sua API com CRUD básico.

## Stack utilizada

**Front-end:** React (yarn vite), Typescript, Material Ui, ESlint, Prettier e Stylelint.

**Back-end:** Node, Express, Nodemon, ESlint, Prettier e Stylelint.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/ArlessonMoura/desafio-welcome
```

**Front-end:**
Entre no diretório fronten-welcome e Instale as dependências

```bash
  yarn
```

Depois rode o script para ser o projeto rodar em localhost no browser

```bash
  yarn dev
```

**Back-end:**

Entre no diretório api-welcome e Instale as dependências

```bash
  yarn
```

Inicie o servidor em 'hot loading' com NODEMON

```bash
  yarn dev
```

## Documentação da API

As regras de negócios manipulam um array de objetos em um arquivo JSON;

obj = { id: NUMBER\_(PK), titulo: STRING, concluida: BOOL };

#### Retorna todos os itens

```http
  GET /tasks
```

| Parâmetro | Tipo   | Descrição               |
| :-------- | :----- | :---------------------- |
| `empty`   | `null` | Retorna array com tasks |

#### Adiciona uma nova tarefa

```http
  post /tasks
```

| Parâmetro           | Tipo     | Descrição                         |
| :------------------ | :------- | :-------------------------------- |
| `titulo, concluida` | `string` | Retorna array de tasks resultante |

#### Atualiza um item

```http
  PATCH /tasks/${id}
```

| Parâmetro | Tipo     | Descrição                         |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | Retorna array de tasks resultante |

#### Deleta um item

```http
  DELETE /tasks/${id}
```

| Parâmetro | Tipo     | Descrição                         |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | Retorna array de tasks resultante |
