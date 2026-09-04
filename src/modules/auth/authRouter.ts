//Creación del Router para la autenticación de los usuarios agregando jwt y bcrypt para la encriptación de las contraseñas

import { Router } from 'express'
import { AuthController } from './authController.js'

//Importacuon del schema de validaciones y del middleware para la validación de los datos recibidos en las rutas de autenticación
import { validateBody } from '../../shared/middleware/validateBody.js'
import { registerSchema, loginSchema } from '../../shared/validation/schemas.js'

//Exportamos el router de autenticación para ser usado en la aplicación principal
//Además del schema de autenticación de los usuarios
export const authRouter = Router()
const controller = new AuthController()

//Establecemos las peticiones para el registro y login de los usuarios, 
// llamando a las funciones correspondientes del controlador de autenticación
/*
authRouter.post('/register', (req, res, next) => controller.register(req, res, next))
authRouter.post('/login', (req, res, next) => controller.login(req, res, next))
*/

//Actualización donde se aplican las validaciones:
authRouter.post('/register', validateBody(registerSchema), (req, res, next) => controller.register(req, res, next))
authRouter.post('/login', validateBody(loginSchema), (req, res, next) => controller.login(req, res, next))