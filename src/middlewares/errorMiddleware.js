import { StatusCodes } from "http-status-codes"
import env from "~/config/environment"


export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const message = err.message || StatusCodes[statusCode]

    const errorResponse = {
        statusCode,
        message,
        stack: err.stack
    }

    if (env.BUILD_MODE !== 'dev') {
        delete errorResponse.stack
    }
    res.status(statusCode).json(errorResponse)
}