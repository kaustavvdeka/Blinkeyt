import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to Category model
    },
  /*  createdAt: {
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


const SubCategoryModel = mongoose.model('subCategory', subCategorySchema);
export default SubCategoryModel;