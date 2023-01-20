import { Request, Response } from 'express';
import { knexConnection } from '../instances/knex';



////////////////////////  OBRIGATÓRIO EM CONTROLLERS COM MUITAS OPERAÇÕES !!!!!!!!!!!!


export const insertWithTransaction = async (req: Request, res: Response)=>{

    const dados = {
        name: req.body.name,
        hability: req.body.hability
    };

    try {

        await knexConnection.transaction(async trx => {
          
        const i = await knexConnection.insert(dados).table('knex').transacting(trx);

        const c = await knexConnection.insert({name: 'rex'}).table('knex').transacting(trx);

        const e = await knexConnection.insert({name: 'rex'}).table('knex').transacting(trx);



            res.json({ success: true, first: i, second: c, third: e});
      
    });


    }catch(err){
        res.json(err);
    }


}