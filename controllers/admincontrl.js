const product = require('../models/model')

exports.first =(req,res) =>
{
    product.find().then((real) =>
    {

        if (real)
        {
            res.render('admin/admin', {prods:real,
                pageTitle:'admin',
                path:'/admin'})
        }
        else{
            res.render('/admin/admin', 
            {prods:[],
            pageTitle:'admin',
            path:'/admin'

            })
        }
    })

    //res.render('home',{pageTitle:'Home',path:'/'})
}

exports.editpage =(req,res) =>
{
    product.findById(req.params.id).then((re) =>
    {
        if (re)
        {
            res.render('admin/editproduct',{
                editing: true,
                pageTitle: 'edit product',
                path:'sdf',
                product: re

            })
        }
    }).catch((er) =>
    {
    console.log(er)
    })
}

exports.edit = (req, res ) =>
{
    let title = req.body.title
  let image  = req.body.imageUrl
   let price = req.body.price
 let desc  = req.body.description
 let prodId =req.body.productId

 product.findById(prodId).then((pro) =>
 {
     if(pro)
     {
         pro.title = title
         pro.imageUrl = image,
         pro.price = price
         pro.description = desc
         pro.save().then(() =>
         {
             res.redirect('/')
         })
     }

 }).catch((er) =>
 {
     console.log(e)
 })

}

exports.delete= (req,res ) =>{
    prodid = req.body.productId

    product.findByIdAndDelete(prodid).then(() =>
    {
        res.redirect('/')
    }).catch((er) =>
    {
        console.log(er)
    })

}