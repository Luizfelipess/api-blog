import { checkSchema } from "express-validator";

export = { 
    create: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        }
    })
 }