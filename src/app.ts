//Se va a separar la app de server.ts 

//Importación de las librerías necesarias
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

//Importación del error handler
import { errorHandler } from './shared/middleware/errorHandler.js'

//Importacion del router
import { taskRouter } from './modules/tasks/taskRouter.js'

//Importación del router de autenticación
import { authRouter } from './modules/auth/authRouter.js'

//Exportamos la app y una instancia de express
export const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(errorHandler)
//Uso del router de tareas y autenticación en la app
app.use('/tasks', taskRouter)

//Uso del router de autenticación en la app
app.use('/auth', authRouter)

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'TaskFlow API Running' })
})

