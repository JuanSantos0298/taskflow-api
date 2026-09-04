//Creacion del middleware para validar el body de las peticiones

import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'
import { AppError } from '../errors/AppError.js'

//Creación del middleware de validación de body
export function validateBody(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body)
        if (!result.success) {
            const message = result.error.issues.map(e => e.message).join(', ')
            throw new AppError(message, 400)
        }
        req.body = result.data
        next()
    }
}