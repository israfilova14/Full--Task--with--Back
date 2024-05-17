const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose');
app.use(express.json())
dotenv.config()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const {Schema} = mongoose
const storeSchema = new Schema({
   imgSrc: {
    type: String,
    require: true,
   },
   title: {
    type: String,
    require: true
   },
   price: {
    type: Number,
    require: true
   }
})

const Store = mongoose.model("Store", storeSchema)

app.post("/store", async(req, res)=>{
    try{
        const {imgSrc, title, price} = req.body;
        const store = new Store({
            imgSrc,
            title,
            price
        })
        await store.save()
        res.status(200).send(store)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get("/store", async(req, res) =>{
    try{
        const stores = await Store.find({});
        res.status(201).send(stores)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})


app.delete("/store/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const store = await Store.findByIdAndDelete(id);
        res.status(200).send(store);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

app.get("/store/:id", async(req, res) =>{
    try{
        const {id} = req.params;
        const store = await Store.findById(id) 
        res.status(200).send(store)

    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.put("/store/:id", async(req, res) =>{
    try{
        const {id} = req.params;
        const {imgSrc, title, price} = req.body
        const store = await Store.findByIdAndUpdate(
            id,
            {
              imgSrc,
              title,
              price
            },
            {
              new: true
            }
        )
        res.status(200).send(store)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})


const PORT = process.env.PORT
const DB = process.env.DB_URL
mongoose.connect(DB)
  .then(() => console.log('Connected!'));

app.listen(PORT, console.log('Port is up and running', PORT))