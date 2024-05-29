const express = require("express");
const bodyParser = require("body-parser")
//const bcrypt = require("bcrypt")
//const dotenv = require("dotenv")
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsDoc = require("swagger-jsdoc");
const books = require("./routes/books_routes");
const users = require("./routes/users_routes");
const connectToDB = require("./config/dbConfig");
const setupSwagger = require('./swagger');

// Load environment variables
//dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// indicate url encoding
app.use(express.urlencoded({ extended: false}))

// add body parser
app.use(bodyParser.json());

// add middleware
app.use(express.json());

// register routes in the routes folder
app.use("/v1/api/books", books);
app.use("/v1/api/users", users);

// connect to database
connectToDB();

// connect swagger
setupSwagger(app);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});