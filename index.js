const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');
const routes = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ exposedHeaders: 'x-token' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.send("<div>hello</div>");
});

app.use(routes);

// charitiesRouter = express.Router()

// External API requests
// app.get('/charities/', (req, res) => {
//   // Do nothing (for now ;) )
//   res.send('get req: ' + req)
// });

// app.use("/charities", charitiesRouter)

const server = http.createServer(app); // express uses this
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
