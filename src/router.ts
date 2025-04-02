import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount } from './handlers'

const router = Router()

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede estar vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede estar vacio'),
    body('email')
        .notEmpty()
        .withMessage('El email no puede estar vacio')
        .isEmail()
        .withMessage('El email no es valido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener minimo 8 caracteres'),
    createAccount)


export default router