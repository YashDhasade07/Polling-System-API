
import QuestionModel from "../models/questions.model.js";
import OptionModel from "../models/options.model.js";
export const create = async (req, res, next) => {
    try {
        console.log(`req: `+ req.body);
        console.log(req.body);
        const title = req.body.title;
        console.log(`title: `+ title);
        let question = new QuestionModel({ title })
        let savedQuestion = await question.save();
        res.status(200).json(savedQuestion);
    } catch (error) {
        console.log(error);
        res.status(400).send('something went wrong');
    }
}

export const getQuestion = async (req, res, next) => {
    try {
        const id = req.params.id;
        let question = await QuestionModel.findOne({ _id: id }).populate('option')
        if (question) {
            res.status(200).json(question);
        } else {
            res.status(404).send('Question not found');
        }
    } catch (error) {
        console.log(error);
        res.status(400).send('something went wrong');
    }
}
export const deleteQuestion = async (req, res, next) => {
    try {
        const id = req.params.id;
        let question = await QuestionModel.findOne({ _id: id });

        if (!question) {
            return res.status(404).send('Question not found');
        }
        // Check if any associated options have votes greater than zero
        const optionsWithVotes = await OptionModel.find({
            _id: { $in: question.option },
            vote: { $gt: 0 }
        });
        if (optionsWithVotes.length > 0) {
            return res.status(400).send('Question cannot be deleted because one or more options have votes');
        }
        await QuestionModel.deleteOne({ _id: id });

        res.status(200).send('Question Deleted');
    } catch (error) {
        console.log(error);
        res.status(400).send('Something went wrong');
    }
}

export const createOption = async (req, res, next) => {
    try {
        const id = req.params.id;
        let question = await QuestionModel.findOne({ _id: id })
        if (question) {
            const { option } = req.body;
            let newOption = new OptionModel({ option, question: id })
            await newOption.save()
            const updateOpt = await OptionModel.findByIdAndUpdate(
                newOption._id,
                { "add_vote": `http://localhost:3300/api/options/${newOption._id}/add_vote` },
                { new: true }
            );
            question.option.push(updateOpt._id)
            await question.save()
            res.status(200).send('option added sucessfully')
        } else {
            res.status(404).send('Question not found');
        }
    } catch (error) {
        console.log(error);
        res.status(400).send('something went wrong');
    }
}