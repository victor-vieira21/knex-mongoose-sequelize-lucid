import { Request, Response } from 'express';
import User from '../models/User';



export const destroyMuitosDeUmaVez = async (req: Request, res: Response)=>{

 let response = await User.deleteMany({
    age: {$lte: 5}
  }, { age: 20 });



  res.json(response);

};

export const DestroyOne = async (req: Request, res: Response)=>{

  let response = await User.findOneAndDelete({
     email: req.body.email
   });
 
 
 
   res.json(response);
 
 };

 export const searchAndDestroy = async (req: Request, res: Response)=>{
    
  let user = await User.findOne({ email: req.body.email });

  let resultado = await user!.remove();

  res.json(resultado);
 

 }
