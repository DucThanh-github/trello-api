import { StatusCodes } from "http-status-codes";
import { BoardService } from "~/services/boardService";
const createNew = async (req, res, next) => {

    try {
        const newBoard = await BoardService.createNew(req.body)

        res.status(StatusCodes.CREATED).json(newBoard)

    } catch (error) {
        next(error)
    }
}

export const BoardController = {
    createNew
}
