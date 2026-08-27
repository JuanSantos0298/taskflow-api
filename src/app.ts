//Se va a separar la app de server.ts 

//Importación de las librerías necesarias
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

//Importación del error handler
import { errorHandler } from './shared/middleware/errorHandler.js'

//Exportamos la app y una instancia de express
export const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(errorHandler)

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'TaskFlow API Running' })
})

