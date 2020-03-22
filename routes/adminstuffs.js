//can edit and delete  
const express = require('express')
const router = express.Router();
const admincontrol = require('../controllers/admincontrl')

router.get('/',admincontrol.first)

router.get('/edit-product/:id',admincontrol.editpage)


router.post('/edit-product',admincontrol.edit)

router.post('/delete-product', admincontrol.delete)

module.exports = router