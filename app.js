require("dotenv").config();
const notFound = require("./middleware/not-found.js");
const connectDb = require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");
const app = express();



//middleware
app.use(express.static("./public"));
app.use(express.json());


//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        console.log("Server Hosted at : http://localhost:3000/index.html");
        app.listen(
            port,
            console.log(`The server is listening on port ${port}...`)
        );
    } catch (err) {
        console.log(err);
    }
};

start();
