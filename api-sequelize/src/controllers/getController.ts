import { Request, Response } from 'express';

// import { sequelize } from '../instances/mysql';   // usado pro authenticate

import { User } from '../models/User';

import { Op } from 'sequelize'

export const consulta = async (req: Request, res: Response)=>{

    let users = await User.findAll({
   where: {
      age: {
        [Op.gte]: 1
      }
    },
    order: [
        ['age', 'ASC'],
        ['name', 'DESC']  
    ],
    limit: 10,
    offset: 0     
    });
   
    res.json(users);

    // res.json(users[0]['name']);

    // console.log(users[0]['name'])

};