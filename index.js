const express = require('express')
const app = express()
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');


//middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/products", productRoute);


app.listen(3000, () => {
    console.log("listening on 3000");
});
app.get('/', (req, res) => {
    res.send("Hello from node Api!")
});


//don't forget to add your username and password

mongoose.connect('mongodb+srv://USERNAME:Password@backenddb.lqvqx8g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb')
    .then(() => console.log('Connected!'))
    .catch((err) => console.log(err));