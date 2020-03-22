const product = require('../models/model')

exports.first =(req,res) =>
{




    res.render('admin/editproduct',{pageTitle:'Home',path:'/user',
editing:false
})

}

exports.detail = (req, res) =>
{
    product.findById(req.params.id).then((pro) =>
    {
        if (pro)
        {
            res.render('details',{
                product: pro,
                pageTitle:'Details',
                path:'/df'
            })
        }
        else{
            console.log('invalid id' + req.params.id)
            res.redirect('/')

        }

    })

}











exports.pos =(req,res) =>
{let title = req.body.title
  let image  = req.body.imageUrl
   let price = req.body.price
 let desc  = req.body.description

 const prod = new product({
     title: title,
     imageUrl: image,
     price: price,
     description: desc
 })

 prod.save();
    res.redirect('/')
}