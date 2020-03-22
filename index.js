const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('validator')


const app = express();

require('dotenv').config();
require('./models/connection')

const port = process.env.PORT || 4000

app.use(express.static(__dirname + '/public'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())



app.set('views', 'views')
app.set('view engine', 'ejs')

const control = require('./controllers/error')

const adminroutes = require('./routes/adminstuffs')
const userroutes = require('./routes/userstuff')



app.get('/', control.first)



app.use('/admin', adminroutes)
app.use('/user',userroutes)

app.use(control.calls)

app.listen(port)