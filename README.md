# Desafio W3lcome

Uma breve descrição sobre o que esse projeto faz e para quem ele é

## Stack utilizada

**Front-end:** React, Redux, TailwindCSS

**Back-end:** Node, Express

## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.
