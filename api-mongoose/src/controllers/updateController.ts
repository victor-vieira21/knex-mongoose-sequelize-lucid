import { Request, Response } from 'express';
import User from '../models/User';



export const updateMuitosDeUmaVez = async (req: Request, res: Response)=>{

 let response = await User.updateMany({
    age: {$lte: 5}
  }, { age: 20 });



  res.json(response);

};

export const updateOne = async (req: Request, res: Response)=>{

  let response = await User.updateOne({
     email: req.body.email
   }, { age: req.body.age });
 
 
 
   res.json(response);
 
 };

 export const searchAndUpdate = async (req: Request, res: Response)=>{
    
  let user = await User.findOne({ email: req.body.email });

  user!.name.lastName = req.body.sobrenome;

  let resultado = await user!.save();

  res.json(resultado);
 

 }
