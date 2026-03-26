import { StatusCodes } from "http-status-codes";

const createNew = async (req, res, next) => {

    try {
        res.status(StatusCodes.CREATED).json({
            message: 'Create new board'

        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: error.message
        })
    }
}

export const BoardController = {
    createNew
}
