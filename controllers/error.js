const products = require('../models/model')




exports.calls = (req,res) =>
{
    res.render('404', {
        pageTitle:'404  page',
        path:'/404'
    })
}



exports.first =(req,res ) =>
{
    let ss =[]    
    products.find().then((re) =>
    {
        if (re){
            
 res.render('home',{pageTitle:'Home',
 path:'/',
 prods:re
 })
        }
        else{           
            res.render('home',{pageTitle:'Home',
            path:'/',
            prods:ss
            })
        }
    
    }).catch((er) =>
    {
    console.log(er)
    })


}
/*
res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All Products',
    path: '/products'
  });
  */