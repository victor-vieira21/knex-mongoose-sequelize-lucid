import { Request, Response } from 'express';

import { User } from '../models/User';

import { Op } from 'sequelize';


// DELETANDO 1
// PEGANDO O USUARIO


export const destroy = async (req: Request, res: Response)=>{

if(req.body.id && req.body.ano && req.body.nome){

    let resultado = await User.findAll({ where: { id: req.body.id }});
    let usuario = resultado[0];

    if(resultado.length > 0 && usuario.name === req.body.nome){
        usuario.age = req.body.ano;

        await usuario.destroy();

        res.json('Cadastrado deletado!');


    }else{
        res.json('Usuário não encontrado!');
    }

}else{
    res.json('Envie os campos corretamente!');
 }

}



/// DELETANDO VARIOS

//.destroy({}, {})

//1 parametro


 
// export const destroy = async (req: Request, res: Response)=>{

//     await User.destroy({
//         where: {
//             age: 35
//         }
//       });
// }


//// apaga todos que tem 35 anos
