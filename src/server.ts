//Importaciones para construir el backend de la app taskflow para la versión web

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'TaskFlow API Running' })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})