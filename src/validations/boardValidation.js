import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(30).trim().strict().messages({
            'any.required': 'Title is required',  // custom message
            'string.empty': 'Title is empty',
            'string.min': 'Title must be at least 3 characters long',
            'string.max': 'Title must be at most 30 characters long',
            'string.trim': 'Title cannot have leading or trailing spaces',
        }),
        description: Joi.string().required().min(3).max(255).trim().strict(),
    })
    try {
        await correctCondition.validateAsync(req.body, { abortEarly: false })
        next()
    } catch (error) {
        const errorMessages = new Error(error).message
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessages))
    }

}
export const BoardValidation = {
    createNew
}
