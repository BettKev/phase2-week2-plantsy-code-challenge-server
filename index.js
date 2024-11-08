const jsonServer = require('json-server'); // Ensure this is correct
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Create db.json if it doesn’t exist
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});