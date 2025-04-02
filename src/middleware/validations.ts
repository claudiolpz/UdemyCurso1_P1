import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';


export const handleInputError = (req: Request, res: Response, next: NextFunction) => {
    //manejo de errores de validacion
    let errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }
    next()
}