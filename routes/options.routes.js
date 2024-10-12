import express from 'express'
import { deleteOption , addVote} from '../controller/OptionsController.js';

const optionRouter = express.Router();

optionRouter.delete('/:id/delete', (req, res, next) => {
    deleteOption(req, res, next)
})
optionRouter.get('/:id/add_vote', (req, res, next) => {
    addVote(req, res, next)
})

export default optionRouter