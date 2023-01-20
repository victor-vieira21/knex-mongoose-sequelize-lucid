import { Request, Response } from 'express';
import { knexConnection } from '../instances/knex';



export const destroy = async (req: Request, res: Response)=>{

 knexConnection.where({ id: req.params.id }).delete().table("knex").then(data => {
  
if(data === 1){
  res.json('deletado');
}else{
res.json(data);
}

}).catch(err => {
 res.json(err);
});

};
