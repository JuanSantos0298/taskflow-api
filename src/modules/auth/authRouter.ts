//Creación del Router para la autenticación de los usuarios agregando jwt y bcrypt para la encriptación de las contraseñas

import { Router } from 'express'
import { AuthController } from './authController.js'

//Exportamos el router de autenticación para ser usado en la aplicación principal
//Además del schema de autenticación de los usuarios
export const authRouter = Router()
const controller = new AuthController()

//Establecemos las peticiones para el registro y login de los usuarios, 
// llamando a las funciones correspondientes del controlador de autenticación
authRouter.post('/register', (req, res, next) => controller.register(req, res, next))
authRouter.post('/login', (req, res, next) => controller.login(req, res, next))