# Journaling Application

This is a solo full-stack project where I designed a small personal journaling application. You can create new entries, delete and update them, as well as filter based on tags. The frontend is created with React.js using Vite. On the server side, I use Express.js to connect to a MongoDB database.

### Future Updates

- Pagination & backend filtering
- user login & registration
- user customization (side bar quote, font family & size, number of entries shown per page)

# Development Setup

### Backend

Navigate to the server folder:
`cd server`

Install the necessary dependencies:

`npm install`

Create an .env file:

```
MONGO_URL='mongodb+srv://USERNAME:CLUSTER_PASSWORD@CLUSTER_NAME.te9shjk.mongodb.net/?retryWrites=true&w=majority'
PORT=BACKEND_PORT_NUMBER
CLIENT='http://localhost:FRONT_END_PORT_NUMBER'
```

Initialize database:

`npm run populate`

Start backend server:

`npm run dev`

### Frontend

Navigate to the client folder:
`cd client`

Install the necessary dependencies:

`npm install`

Create an .env.local file:

```
VITE_SERVER_HOST='http://localhost:BACKEND_PORT_NUMBER'
```

Start frontend server:

`npm run dev`
