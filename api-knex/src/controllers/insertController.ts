import { Request, Response } from 'express';
import { knexConnection } from '../instances/knex';


export const insert = async (req: Request, res: Response)=>{

    const dados = {
        name: req.body.name,
        hability: req.body.hability
    };



// const dados = [            /// pode se inserir tbm um array de dados
//     {
//     name: 'Victor',
//     hability: 'bigger'
//     },
//     {
//         name: 'Victor',
//         hability: 'super Smart'       ///// COLOCAR UM ARRAY 
//         },
//         {
//             name: 'Victor',
//             hability: 'super Developer'
//             },
// ];


let result = knexConnection.insert(dados).into("knex").then(data => {
   //////  se pode colocar uma chamada dentro de outra...
  knexConnection.select().table("knex").then(data => {
    //////  se pode colocar uma chamada dentro de outra...
    res.json(data);
    //////  se pode colocar uma chamada dentro de outra...
 }).catch(err => {
   res.json(err);
 });
//////  se pode colocar uma chamada dentro de outra...
}).catch(err => {
    res.json(err);
})
  
};


export const insertAssoc = async (req: Request, res: Response)=>{

  const dados = {
    type: req.body.type,
    id_hability: req.body.id
};

let result = knexConnection.insert(dados).into("types").then(data => {
   res.json(data);
}).catch(err => {
   res.json(err);
})




};



