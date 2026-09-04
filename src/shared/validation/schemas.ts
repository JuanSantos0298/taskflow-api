//Archivo donde haremos validaciones de los datos que recibimos en las rutas usando Zod

//Creación de los esquemas de validación para las rutas de registro, login y creación de tareas

import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string().min(2, 'Nombre muy corto'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Contraseña muy corta'),
})

export const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(1, 'Contraseña requerida'),
})

export const createTaskSchema = z.object({
    title: z.string().min(1, 'Título requerido'),
    description: z.string().optional(),
    userId: z.string().min(1, 'UserId requerido'),
})