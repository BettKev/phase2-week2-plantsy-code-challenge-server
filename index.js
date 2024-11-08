const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Adjust if the JSON file has a different name
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 6001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
