import type {Request, Response, NextFunction} from 'express'
import type { TypeJwtPayload } from '../models/Jwt';
import jwt from 'jsonwebtoken';
import User, { IUser } from "../models/User"

declare global {
    namespace Express {
        interface Request {
            user?: IUser //
        }
    }
}

export const autenticate = async (req: Request, res: Response, next: NextFunction) =>{
    const bearer = req.headers.authorization

    if(!bearer) {
        const error = new Error('No autorizado')
        res.status(401).json({error: error.message})
        return
    }
    const [, token] = bearer.split(' ')
    if(!token) {
        const error = new Error('No autorizado')
        res.status(401).json({error: error.message})
        return
    }
    try {
       
        const result = jwt.verify(token, process.env.JWT_SECRET)
        if(typeof result === 'object' && result !== null && 'user' in result) {
            const decoded = result as TypeJwtPayload
            const user = await User.findById(decoded.user._id).select('-password -__v')
            
            if(!user) {
                res.status(401).json({error: 'Usuario no valido'})
                return
            }
            
            req.user = user;
            next();
            return;
        }


         res.status(401).json({error: 'Token inválido'})
         return;

    }catch (error) {
        error.message = 'Token inválido o expirado';
        res.status(401).json({error: error.message})
        return
    }

}