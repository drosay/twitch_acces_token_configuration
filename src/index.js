'use strict'

const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index.js')

const app = express()

//configurations
app.set('port', 3500 || process.env.PORT)
app.set('json spaces',2)

//middlewares
app.use(morgan('dev'))
//app.use(express.urlencoded({extended:false})) //Only if we get form values from the frontend
app.use(express.json())

//router
app.use(routes)

app.listen(app.get('port'),()=>{
    console.log(`Server mounted on port ${app.get('port')}`)
})