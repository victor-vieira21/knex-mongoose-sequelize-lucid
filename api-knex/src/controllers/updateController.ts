import { Request, Response } from 'express';
import { knexConnection } from '../instances/knex';



export const update = async (req: Request, res: Response)=>{

 knexConnection.where({ id: req.body.id }).update({ name: req.body.name, hability: req.body.hability }).table("knex").then(data => {
  
if(data === 1){
  res.json('Atualizado');
}else{
  res.json(data);
}

}).catch(err => {
 res.json(err);
});

};
