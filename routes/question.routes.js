import express from 'express'
import { create, deleteQuestion, getQuestion, createOption } from '../controller/QuestionsController.js';

const questionRouter = express.Router();

questionRouter.post('/create', (req, res, next) => {
    create(req, res, next)
})
questionRouter.get('/:id', (req, res, next) => {
    getQuestion(req, res, next)
})
questionRouter.delete('/:id/delete', (req, res, next) => {
    deleteQuestion(req, res, next)
})
questionRouter.post('/:id/options/create', (req, res, next) => {
    createOption(req, res, next)
})

export default questionRouter