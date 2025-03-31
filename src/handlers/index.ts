import type { Request, Response } from 'express';
import User from "../models/User"
import { hashPassword } from '../utils/auth';

export const createAccount = async (req: Request, res:Response) => {
    
    const { email,password } = req.body

    const userExists = await User.findOne({email})
    if(userExists) {
        const error = new Error('User already exists')
        res.status(401).json({error: error.message})
        return
    }
    
    const user = new User(req.body)
    user.password = await hashPassword(password)
    await user.save()
    res.status(201).send({msg: "User created"})
}