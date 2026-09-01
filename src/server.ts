//Importaciones para construir el backend de la app taskflow para la versión web

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

//Importamos la configuración de la base de datos de MongoDB
import { connectDatabase } from './config/database.js'

import { app } from './app.js'

//Import de dotenv
import 'dotenv/config'

const PORT = process.env.PORT || 3000

//Agregamos la conexión de la base de datos de MongoDB
const MONGO_URI = process.env.MONGO_URI || 'tu_connection_string'


connectDatabase(MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})

//Conexion hardcodeada para verificación
/*
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

*/