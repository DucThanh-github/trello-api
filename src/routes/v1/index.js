import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { BoardRoutes } from './boardRoutes.js';

const Router = express.Router();

Router.get('/status', (req, res) => {
    return res.status(StatusCodes.OK).json({
        message: 'OK'
    })
});

Router.use('/boards', BoardRoutes)
console.log('BoardRoutes', BoardRoutes)
export const APIs_V1 = Router;