//can only create 
const express = require('express')
const router = express.Router();
const usercontrol = require('../controllers/usercontrol')

router.get('/', usercontrol.first)

router.get('/:id',usercontrol.detail)

router.post('/add-product',usercontrol.pos)

module.exports = router