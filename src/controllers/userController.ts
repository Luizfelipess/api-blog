import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { validationResult, matchedData } from 'express-validator';

export const all = async ( req: Request, res: Response ) => {
    const users = await UserService.findAll();

    res.json({ users })
}

export const create = async ( req: Request, res: Response ) => {
    const { email, name, age} = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({error: errors.mapped()});

    } 
    
    const data = matchedData(req);

    if(email && name) {
        const user = await UserService.findOne({ email });
        if (!user) {
            const newUser = await UserService.create({
                email, name, age
            });

            res.status(201).json({ user: newUser})

        } else {

            res.json({ error: 'Já existe usuário com este e-mail!'})

        }
    } else {
        res.json({ error: 'Email ou nome não preenchido'})
    }
}