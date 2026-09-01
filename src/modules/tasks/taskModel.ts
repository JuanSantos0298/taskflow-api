//De forma similar a como en Flutter creamos un modelo para obtener los datos, en MongoDB se les conoce como schemas

import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    isCompleted: { type: Boolean, default: false },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

export const TaskModel = mongoose.model('Task', taskSchema)