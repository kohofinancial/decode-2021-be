const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const routes = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ exposedHeaders: 'x-token' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./swagger')(app);
require('./db/index');

app.use(routes);
app.use('/', (req, res) => {
  res.send("<div>hello</div>");
});

const server = http.createServer(app); // express uses this
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
