import { Request, Response, NextFunction } from 'express'
//Agregamos el modelo de Task (schema)
import { TaskModel } from './taskModel.js'


//Actualización de la información en la que pasamos de usar datos hardcodeados a obtenerlos de la conexión de la BBDD y el schema
export class TaskController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.query
            const tasks = await TaskModel.find(userId ? { userId: String(userId) } : {})
            res.json({ status: 'ok', data: tasks })
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, description, userId } = req.body
            const task = await TaskModel.create({ title, description, userId })
            res.status(201).json({ status: 'ok', data: task })
        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await TaskModel.findByIdAndDelete(req.params.id)
            res.json({ status: 'ok', message: 'Tarea eliminada' })
        } catch (error) {
            next(error)
        }
    }
}