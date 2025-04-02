import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount, login } from './handlers'
import { handleInputError } from './middleware/validations'

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
    handleInputError,
    createAccount
)

router.post('/auth/login',
    body('email')
    .notEmpty()
    .withMessage('El E-mail es obligatorio')
    .isEmail()
    .withMessage('El E-mail no es valido'),
    body('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria'),
    handleInputError,
    login,
)
export default router