const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

//product schema

const productSchema = mongoose.Schema(
    {
        item_name:{
            type: String,
            required: [true, "Please enter a product name"]
        },

        subcategory_name:{
            type: String,
            required: [true, "Please enter a subcategory name"]
        },

        image:{
            type: String,
            required: [true, "Please enter the product image url"]
        },

        short_description:{
            type: String,
            required: [true, "Please enter the product description"]
        },

        price:{
            type: Number,
            required: [true, "Please enter the product price"]
        },

        rating:{
            type: Number,
            required: [true, "Please enter the product rating"]
        },

        customization:{
            type: String,
            required: [true, "Please enter product customization status"]
        },

        processing_time:{
            type: String,
            required: [true, "Please enter the product processing time"]
        },

        stock_status:{
            type: String,
            required: [true, "Please enter the product stock status"]
        },

        user_name:{
            type: String,
            required: true,
            default: "Default user"
        },

        user_email:{
            type: String,
            required: true,
            default: "No user email"
        }
    },
    {
        timestamps: true
    }
)

//product model

const Product = mongoose.model("Product", productSchema);

module.exports = Product;