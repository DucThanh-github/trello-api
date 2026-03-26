import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { BoardValidation } from '../../validations/boardValidation.js'
import { BoardController } from '../../controllers/boardController.js'
const Router = express.Router()

Router.route('/')
    .get((req, res) => {
        return res.status(StatusCodes.OK).json({
            message: 'Get all boards'
        })
    })
    .post(BoardValidation.createNew, BoardController.createNew)


Router.route('/:id')
    .get((req, res) => {
        return res.status(StatusCodes.OK).json({
            message: 'Get board by id'
        })
    })
export const BoardRoutes = Router;