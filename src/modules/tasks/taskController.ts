import { Request, Response, NextFunction } from 'express'

export class TaskController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            // Por ahora datos de prueba
            const tasks = [
                { id: '1', title: 'Tarea 1', isCompleted: false },
                { id: '2', title: 'Tarea 2', isCompleted: true },
            ]
            res.json({ status: 'ok', data: tasks })
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, description, userId } = req.body
            res.status(201).json({
                status: 'ok',
                data: { id: Date.now().toString(), title, description, userId, isCompleted: false }
            })
        } catch (error) {
            next(error)
        }
    }
}