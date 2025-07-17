import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to Product model
    },
    quantity: {
        type: Number,
        default: 1,
    },  
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
    },
},{
    timestamps: true,
})

const CartProductModel = mongoose.model('cartProduct', cartProductSchema);
export default CartProductModel;