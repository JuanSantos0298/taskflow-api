import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TaskFlow API',
            version: '1.0.0',
            description: 'API REST para TaskFlow',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                },
            },
        },
    },
    apis: ['./src/modules/**/*.ts'],
}

export const swaggerSpec = swaggerJsdoc(options)