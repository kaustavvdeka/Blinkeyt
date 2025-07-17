import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        
    },
    orderId:{
        type: String,
        required: true,
        unique: true,
    },
    product_details: {
       name:String,
       image: String,

    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to Payment model
        default: '',
    },
     payment_id: {
        type:String,
         default: '',
    },

    payment_status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending',
    },
    delivery_address: {
        type: mongoose.Schema.Types.Mixed, // Use Mixed type for flexible address structure
        ref: 'Address', // Reference to Address model
       
    },
    delivery_status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    subTotalAmt:{
        type: Number,
        default: 0,
    },
    totalAmt: {
        type: Number,
        default: 0,
    },
    invoice_reciept: {
        type: String,
        default: '',
    },

});

const OrderModel = mongoose.model('Order', orderSchema);
export default OrderModel;