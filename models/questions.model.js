import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    option: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]
})

const QuestionModel = mongoose.model('Question', questionsSchema);
export default QuestionModel;