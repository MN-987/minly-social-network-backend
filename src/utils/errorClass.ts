export class ErrorClass extends Error {
    status: number
    constructor(message, status){
        super(message)
        this.status = status || 500
    }
}
