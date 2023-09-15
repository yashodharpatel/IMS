import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a valid inventory name"],
        unique: true
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
    description: {
        type: String,
        required: [false],
    },
    quantity: {
        type: Number,
        required: [true, "Please provide a valid quantity count"],
    },
    userId: {
        type: String,
        required: [true, "Please provide a valid user Id"],
    }
})

const Inventory= mongoose.models.inventories || mongoose.model("inventories", inventorySchema);

export default Inventory;