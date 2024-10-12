import mongoose from "mongoose";

const optionsSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    vote: {
        type: Number,
        default: 0
    },
    add_vote: {
        type: String
    }
})

const OptionModel = mongoose.model('Option', optionsSchema);
export default OptionModel;