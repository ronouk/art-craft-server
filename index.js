const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;

// art-craft-db
// azHvm7ycBZDNkL9X

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Art and craft server is running")
})

mongoose.connect("mongodb+srv://art-craft-db:azHvm7ycBZDNkL9X@cluster0.jjpytgu.mongodb.net/art-craft-database?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to the mongo database")

        //start the application
        app.listen(port, () => {
            console.log("Coffee server is running on port: ", port)
        })
    })
    .catch(error => {
        console.log(error)
    })