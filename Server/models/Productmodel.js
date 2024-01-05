const mongoose = require('mongoose');   
const Productschema = mongoose.Schema({
    name : {
        type : String,
    }
})

const Product = mongoose.model("Product", Productschema);
 
module.exports = Product;