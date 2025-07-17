import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
   
    price: {
        type: Number,
         dafault: null,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to Category model
       },
    subCategory: {
       type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory', // Reference to Category model
    },
    image: {
        type: Array,
        default: [],
    },
    units: {
        type: string,
        default: '',
    },
    stock: {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
    ratings: {
        type: string,
        default: '',
    },
     more_details: {
        type: object,
        dafault: {},
    },
    publish: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,

})

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;