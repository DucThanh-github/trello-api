import Joi from "joi";
import { StatusCodes } from "http-status-codes";

const createBoardValidation = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
})

const createNew = async (req, res) => {
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(30).trim().strict().messages({
            'any.required': 'Title is required',
            'string.empty': 'Title is empty',
            'string.min': 'Title must be at least 3 characters long',
            'string.max': 'Title must be at most 30 characters long',
            'string.trim': 'Title cannot have leading or trailing spaces',
        }),
        description: Joi.string().required().min(3).max(255).trim().strict(),
    })
    try {
        await correctCondition.validateAsync(req.body, { abortEarly: false })
        return res.status(StatusCodes.OK).json({
            message: 'Create new board'

        })
    } catch (error) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })
    }

}
export const BoardValidation = {
    createNew
}
