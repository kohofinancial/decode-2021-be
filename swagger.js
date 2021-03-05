const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

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
  apis: ["./routes/*.js"],
};

const docs = swaggerJsdoc(options);

module.exports = app => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));
};
