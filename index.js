const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;

const Product = require("./models/productModel")

// art-craft-db
// azHvm7ycBZDNkL9X

//middleware
app.use(cors());
app.use(express.json());
//to use form instead of json
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Art and craft server is running")
})

//fetch all the product from the database
app.get("/all-crafts", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//post data to the database
app.post('/add-craft', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

//fetch a single product with id
app.get("/all-crafts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
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