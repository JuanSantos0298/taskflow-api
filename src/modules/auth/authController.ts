//Creación del Scheme para la autenticación de los usuarios agregando jwt y bcrypt para la encriptación de las contraseñas 
// y la generación de tokens de autenticación

import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserModel } from './userModel.js'
import { AppError } from '../../shared/errors/AppError.js'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export class AuthController {
    //Función para registrar un nuevo usuario, validando que el email no esté registrado 
    // y encriptando la contraseña antes de guardarla en la base de datos
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body
            const existing = await UserModel.findOne({ email })
            if (existing) throw new AppError('Email ya registrado', 400)

            const hashed = await bcrypt.hash(password, 10)
            const user = await UserModel.create({ name, email, password: hashed })

            res.status(201).json({
                status: 'ok',
                data: { id: user._id, name: user.name, email: user.email }
            })
        } catch (error) {
            next(error)
        }
    }
    //Funcion para el login de los usuarios, validando las credenciales y generando un token JWT para la autenticación
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body
            const user = await UserModel.findOne({ email })
            if (!user) throw new AppError('Credenciales incorrectas', 401)

            const valid = await bcrypt.compare(password, user.password)
            if (!valid) throw new AppError('Credenciales incorrectas', 401)

            const token = jwt.sign(
                { id: user._id, email: user.email },
                JWT_SECRET,
                { expiresIn: '7d' }
            )

            res.json({ status: 'ok', token })
        } catch (error) {
            next(error)
        }
    }
}