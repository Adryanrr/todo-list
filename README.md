# 📝 ToDo List API – Fastify + Docker + PostgreSQL + Prisma

API RESTful para gerenciamento de tarefas, desenvolvida com [Fastify](https://www.fastify.io/), usando **Prisma ORM** com **PostgreSQL**, e containerizada com **Docker** para facilitar o desenvolvimento e a implantação.

---

## 📦 Tecnologias

- **Node.js + Fastify**
- **PostgreSQL**
- **Prisma ORM**
- **Docker & Docker Compose**

---

## 🚀 Como executar

### ✅ Com Docker

```bash
docker-compose up --build
```

> Isso sobe a aplicação e o banco PostgreSQL. O Prisma será inicializado automaticamente, desde que você configure os scripts corretamente.

### 🛑 Parar

```bash
docker-compose down
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis:

```env
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@db:5432/todolist
```

> A URL `db` é o nome do serviço no `docker-compose.yml`.

---

## 🧬 Prisma

### Gerar cliente Prisma:

```bash
npx prisma generate
```

### Rodar as migrations:

```bash
npx prisma migrate dev
```

### Visualizar o banco com Studio:

```bash
npx prisma studio
```

---

## 📚 Endpoints

| Método | Rota         | Descrição                     |
| ------ | ------------ | ----------------------------- |
| GET    | `/tasks`     | Lista todas as tarefas        |
| GET    | `/tasks/:id` | Retorna uma tarefa específica |
| POST   | `/tasks`     | Cria uma nova tarefa          |
| PUT    | `/tasks/:id` | Atualiza uma tarefa existente |
| DELETE | `/tasks/:id` | Remove uma tarefa             |

**Exemplo de payload:**

```json
{
  "title": "Estudar Docker",
  "description": "Ler documentação oficial do Docker"
}
```

---

## 🐳 Docker

### `Dockerfile`

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
```

---

### `docker-compose.yml`

```yaml
version: "3.8"

services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    env_file:
      - .env
    depends_on:
      - db
    command: sh -c "npx prisma migrate deploy && npm run dev"

  db:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: todolist
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

---

## 📁 Estrutura do Projeto

```
.
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 📄 Licença
