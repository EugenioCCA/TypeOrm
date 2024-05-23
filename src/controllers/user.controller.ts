
import { json } from "stream/consumers"
import { User } from "../entity/user"
import { Request, Response } from "express"

export const getUsers = async(req: Request, res: Response) => {
    try {
        
        const listaUsers = await User.find()
        return res.json(listaUsers)
    } catch(error){
        if(error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}

export const createUser = async(req: Request, res: Response) => {
    try {
        console.log(req.body)

        //const {nombre, contrasenia, correo_electronico} = req.body
        const {contrasenia, correo_electronico} = req.body
        const user = new User()
        user.contrasenia = contrasenia
        user.correo_electronico = correo_electronico

        await user.save()

        //Regresar al usuario el objeto creado
        return res.json(user)

    } catch(error){
        if(error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}