const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ exposedHeaders: 'x-token' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API for Koho Charity",
        version: "0.1.0",
        description:
          "This is a simple CRUD API for the Koho Charity deCode hackathon",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "",
          url: "",
          email: "",
        },
      },
      servers: [
        {
          url: "http://localhost:5000/",
        },
      ],
    },
    apis: ["./routes/index.js"],
};

const specs = swaggerJsdoc(options);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.use('/', (req, res) => {
  res.send("<div>hello</div>");
});

app.use(routes);

charitiesRouter = express.Router()


// External API requests
app.get('/charities/', (req, res) => {
  // Do nothing (for now ;) )
  res.send('get req')
});

app.use("/charities", charitiesRouter)

const server = http.createServer(app); // express uses this
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
