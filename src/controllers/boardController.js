import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";
const createNew = async (req, res, next) => {

    try {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'Invalid request')
        res.status(StatusCodes.CREATED).json({
            message: 'Create new board'

        })
    } catch (error) {
        next(error)
    }
}

export const BoardController = {
    createNew
}
