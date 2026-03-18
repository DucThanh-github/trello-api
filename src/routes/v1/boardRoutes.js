import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
    .get((req, res) => {
        return res.status(StatusCodes.OK).json({
            message: 'Get all boards'
        })
    })
    .post((req, res) => {
        console.log('Create new board')
    })


Router.route('/:id')
    .get((req, res) => {
        return res.status(StatusCodes.OK).json({
            message: 'Get board by id'
        })
    })
export const BoardRoutes = Router;