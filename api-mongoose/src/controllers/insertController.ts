import { Request, Response } from 'express';
import User from '../models/User';


export const insert = async (req: Request, res: Response)=>{

    const dados = {
        name: {firstName: req.body.nome, lastName: req.body.sobrenome },
        age: req.body.idade,
        email: req.body.email,
        interesses: req.body.interesses
    };

  const response = await User.create(dados);

  res.json(response);

}



//////////////// OUTRA FORMA DE INSERIR
//////////
// export const insertTwo = async (req: Request, res: Response)=>{

// let newUser = new User();
// newUser.name = {firstName: req.body.nome, lastName: req.body.sobrenome };
// newUser.age = req.body.idade;
// newUser.email = req.body.email;
// newUser.interesses = req.body.interesses;
// let response = await newUser.save();

// }






