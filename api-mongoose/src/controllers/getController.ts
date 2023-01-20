import { Request, Response } from 'express';
import User from '../models/User';

//////////////////////////////////////////////////////
//////////// ORDENAÇÃO 

////////////   .sort({parametro: 1})    -- ASC 

////////////   .sort({parametro: -1})   -- DESC

////////////   .sort({parametro: -1, outroparametro: 1})   --  vai pegar primeiro e desempatar com segundo...

//////////////////////////////////////////////////////

  // let usuarios = await User.find({}).sort({"name.firstName": -1}).limit(2).skip(2);

///////////// LIMITAÇÃO


/////////////////////  .limit(2);     -- virão os 3º e 4º
/////////////////////  .skip(2);

export const getAll = async(req: Request, res: Response)=>{
  let usuarios = await User.find({});

  res.json(usuarios);
}

export const getByEmail = async(req: Request, res: Response)=>{
  const email = req.body.email;

  let usuarios = await User.findOne({email: email});

  res.json(usuarios);
}

export const getByFirstName = async(req: Request, res: Response)=>{
  const name = req.body.name;

  let usuarios = await User.find({"name.firstName": name});

  res.json(usuarios);
}


////////////////////////  maior, maior igual...etc...    ///////////////////////////////////////

// $gt     >
// $gte    >=
// $lt     <
// $lte    <=


export const getIdadeMaiorQue = async(req: Request, res: Response)=>{
  const age = req.body.age;

  let usuarios = await User.find({age: {$gt: age}});

  // let usuarios = await User.find({age: {$gt: age, $lt: 100}});

  res.json(usuarios);
}



