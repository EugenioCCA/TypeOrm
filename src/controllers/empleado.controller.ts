import { Request, Response } from "express"
import { User } from "../entity/user"
import { Vale } from "../entity/vale"

export const createEmpleado = (req: Request, res: Response)=> {
    try {
        const{
            usuarioId,nombre,ap_paterno,ap_materno,telefono,idVale
        } = req.body

        //buscar usuario por id
        const user = User.findBy(usuarioId)

        //Buscar vale por id
        const vale = Vale.findBy(idVale)

    }catch(error){
        if(error instanceof Error)
        return res.status(500).json({message: error.message})
        
}}