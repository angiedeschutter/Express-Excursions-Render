// DEPENDENCIES
require('dotenv').config()
const PORT = process.env.PORT
const express= require('express')
const app = express()
const cors = require('cors')
const { Sequelize } = require('sequelize')
const path = require("path")
const  bodyParser  =require( 'body-parser')


//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json())


// ROOT
app.get('/', function(req,res){
  let { data } = await supabase
  .from('destinations')
  .select('*')
  console.log(data)
})
   

// CONTROLLERS

const destinationsController = require('./controllers/destinations_controller')
app.use('/destinations', destinationsController)

const continentsController = require('./controllers/continent_controllers')
app.use('/continents', continentsController)



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
  

module.exports = app;