import { Request, Response } from 'restify'

export const handleError = (request: Request, response: Response, error: any, done: any) => {

    error.toJSON = () => {
        return {
            message: error.message
        }
    }

    switch(error.name) {
        case 'MongoError':
            if(error.code === 1100) {
                error.statusCode = 400
            }
            break;
        case 'ValidationError':
            error.statusCode = 400
            const messages: Array<any> = []

            for(let name in error.errors) {
                messages.push( {message: error.errors[name].message} )
            }

            error.toJSON = () => ({
                errors: messages
            })

            break;
    }

    done()

}