//Archivo con el que vamos a manejar el middleware de autenticación y validar el token de los usuarios

import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { AppError } from '../errors/AppError.js'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

///Creación del middleware de autenticación
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new AppError('Token requerido', 401)
    }

    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        (req as any).user = decoded
        next()
    } catch {
        throw new AppError('Token inválido', 401)
    }
}