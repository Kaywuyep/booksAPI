const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// swagger config options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Books API",
            description: "CRUD API to manage all books stored in database",
            version: "1.0.0",
        },
    },
    servers:[
        {
            url: "http://127.0.0.1:4000/"
        },
    ],
    apis: ["./routes/*.js"], // path to the api routes folder
};

// swagger documentations or specs
const swaggerDocs = swaggerJsDoc(options);

// setup swagger user interface
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports =  (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};