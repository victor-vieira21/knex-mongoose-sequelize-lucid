import { Request, Response } from 'express';

import { User } from '../models/User';

import { Op } from 'sequelize';


 // 2 formas
 //((build + save)) uma faz build e dps save   (coloquei como insert mas ele build e dps save)
 //
 // o build é quando o código ainda vai fazer etapas antes de enviar pra fazer lógicas pra pegar
 //mais dados antes de inserir


 //((create))  o create insere de uma vez

 
export const insert = async (req: Request, res: Response)=>{

 //build + save
 if(req.body.nome.length > 0){

    const user = User.build({
        name: req.body.nome,
        age: req.body.ano
     });
    
     await user.save();

     res.redirect('/');
    
   //   res.json({ sucess: 'ok'})
}else{
   res.redirect('/');
}
//  }else{
//     res.json({ fail: 'Campo não enviado'})
//  }


}

export const create = async (req: Request, res: Response)=>{

if(req.body.nome.length > 0){

 const user = await User.create({
    name: req.body.nome
 });

 res.json({ sucess: 'ok'});
 
}else{
    res.json({ fail: 'Campo não enviado'});
 }

}