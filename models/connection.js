const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://MarvelBig:${process.env.database_key}@cluster0-asedo.azure.mongodb.net/freestyle?retryWrites=true&w=majority`,
{
    useUnifiedTopology: true,
    useNewUrlParser: true

})
.then(() =>
{
    console.log('connected to database')
}).catch((er) =>
{console.log(er)  

})