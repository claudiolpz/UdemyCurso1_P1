import type { Request, Response } from 'express';
import slug from 'slug'
import User from "../models/User"
import { checkPassword, hashPassword } from '../utils/auth';


export const createAccount = async (req: Request, res:Response) => {

    const { email,password } = req.body

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

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle
    await user.save()
    res.status(201).send({msg: "User created"})
}

export const login = async (req: Request, res: Response) => {

    const { email,password } = req.body

    const user = await User.findOne({email})
    if(!user) {
        const error = new Error('No existe Usuario con este E-mail')
        res.status(404).json({error: error.message})
        return
    }

    //comparar contraseña
    const isPasswordCorrect = await checkPassword(password, user.password)
    if(!isPasswordCorrect) {
        const error = new Error('Contraseña incorrecta')
        res.status(401).json({error: error.message})
        return
    }

    res.send('AUTENTICADO')
}