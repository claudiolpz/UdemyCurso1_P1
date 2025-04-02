import type { Request, Response } from 'express';
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from "../models/User"
import { hashPassword } from '../utils/auth';


export const createAccount = async (req: Request, res:Response) => {
    //manejar errores de validacion
    let errors = validationResult(req)
    
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }

    const { email,password} = req.body

    const userExists = await User.findOne({email})
    if(userExists) {
        const error = new Error('Un usuario con este mail ya esta registrado')
        res.status(409).json({error: error.message})
        return
    }

    const handle = slug(req.body.handle, '')

    const handleExist = await User.findOne({handle})
    if(handleExist) {
        const error = new Error('Nombre de usuario no disponible')
        res.status(409).json({error: error.message})
        return
    }
    console.log(slug(handle))

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle
    await user.save()
    res.status(201).send({msg: "User created"})
}