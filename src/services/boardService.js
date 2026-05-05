import ApiError from "~/utils/ApiError";
import { slugify } from "~/utils/formatters";


const createNew = async (reqBody) => {
    try {
        const boardData = {
            ...reqBody,
            slug: slugify(reqBody.title)
        }
        return boardData
    } catch (error) {
        throw error
    }
}


export const BoardService = {
    createNew
}