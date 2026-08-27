//Generamos la clase que se va a encargar de generar los errores

export class AppError extends Error {
    constructor(
        public message: string,
        public statusCode: number = 500
    ) {
        super(message)
    }
}