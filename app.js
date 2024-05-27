const express = require("express");
const bodyParser = require("body-parser")
//const dotenv = require("dotenv")
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsDoc = require("swagger-jsdoc");
const books = require("./routes/books_routes");
const connectToDB = require("./config/dbConfig");
const setupSwagger = require('./config/swaggerconfig');

// Load environment variables
//dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// add body parser
app.use(bodyParser.json());

// add middleware
app.use(express.json());

// register routes in the routes folder
app.use("/v1/api/books", books);

// connect to database
connectToDB();

// connect swagger
setupSwagger(app);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});