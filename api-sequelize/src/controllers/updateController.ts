import { Request, Response } from 'express';

import { User } from '../models/User';

import { Op } from 'sequelize';


// ATUALIZANDO 1
// PEGANDO O USUARIO

//fazendo já com base na minha cabeça, pegando post e fazendo minhas próprias tratativas

//spoiler:  deu certo

export const update = async (req: Request, res: Response)=>{

if(req.body.id && req.body.ano && req.body.nome){

    let resultado = await User.findAll({ where: { id: req.body.id }});
    let usuario = resultado[0];

    if(resultado.length > 0 && usuario.name === req.body.nome){
        usuario.age = req.body.ano;

        await usuario.save();

        res.json('Cadastrado atualizado!');


    }else{
        res.json('Usuário não encontrado!');
    }

}else{
    res.json('Envie os campos corretamente!');
}

   
}



/// ATUALIZANDO VARIOS

//.update({}, {})

//2 parametros

//primeiro:  dado a ser alterado ou dados a serem alterados

//segundo: condição para encontrar o item ou os itens

 
// export const update = async (req: Request, res: Response)=>{

//     await User.update({ age: req.body.ano }, {
//         where: {
//             age: 35
//         }
//       });
// }


//// ATUALIZA PRA IDADE ENVIADA TODOS QUE TEM 35 ANOS
