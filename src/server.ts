//Importaciones para construir el backend de la app taskflow para la versión web

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { app } from './app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})