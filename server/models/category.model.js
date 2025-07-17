import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
   /* createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },*/

},{
    timestamps: true,
})

const CategoryModel = mongoose.model('Category', categorySchema);
export default CategoryModel;