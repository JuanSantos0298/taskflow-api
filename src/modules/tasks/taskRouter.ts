//Creación del archivo de las rutas de las tareas con las que vamos a crear los endpoint

import { Router } from 'express'
//Importacion del controlador
import { TaskController } from './taskController.js'

export const taskRouter = Router()
//Instancia del controlador
const controller = new TaskController()

taskRouter.get('/', (req, res, next) => controller.getAll(req, res, next))
taskRouter.post('/', (req, res, next) => controller.create(req, res, next))

taskRouter.put('/:id', (req, res) => {
    res.json({ message: `Tarea ${req.params.id} actualizada` })
})

//Actualización del endpoint delete
taskRouter.delete('/:id', (req, res, next) => controller.delete(req, res, next))