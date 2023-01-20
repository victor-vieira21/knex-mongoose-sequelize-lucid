import { Request, Response } from 'express';
import { knexConnection } from '../instances/knex';


export const getAll = async (req: Request, res: Response)=>{

  knexConnection.select().orderBy("id", "desc").table("knex").then(data => {
     res.json(data);
  }).catch(err => {
    res.json(err);
  });
  
};

export const getNameHability = async (req: Request, res: Response)=>{

  knexConnection.select(["name","hability"]).table("knex").then(data => {
     res.json(data);
  }).catch(err => {
    res.json(err);
  });
  
};

export const getForId = async (req: Request, res: Response)=>{

 knexConnection.where({ id: req.params.id }).table("knex").then(data => {
  
if(data){
  res.json(data);
}else{
res.json('ID não encontrado');
}

}).catch(err => {
 res.json(err);
});

};

export const getMore = async (req: Request, res: Response)=>{

  knexConnection.whereRaw("id > " + req.params.id).table("knex").then(data => {
   
 if(data){
   res.json(data);
 }else{
 res.json('ID não encontrado');
 }
 
 }).catch(err => {
  res.json(err);
 });
 
 };


 export const personalizada = async (req: Request, res: Response)=>{

  knexConnection.raw("select * from knex where name = 'Victor' AND id <= 3").then(data => {
   
 if(data){
   res.json(data[0]);     /// ele volta dois arrays, um com as info, outro com um monte de atoa
 }else{
 res.json('Not found');
 }
 
 }).catch(err => {
  res.json(err);
 });
 
 };


///// AND 

/// 2 wheres 

// knexConnection.select(['name','etc...'])
//            .where({ id: req.params.id })
//            .where({ name: req.params.name })
//            .table("knex")
//            .then(data => {


///// OR 

// knexConnection.select(['name','etc...'])
//            .where({ id: req.params.id })
//            .orWhere({ name: req.params.name })
//            .table("knex")
//            .then(data => {


///// >=   //  > // <=  // < 

// knexConnection.select(['name','etc...'])
//            .whereRaw("preco > 50")      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=====================
//            .table("knex")
//            .then(data => {





export const getWithJoin = async (req: Request, res: Response)=>{


knexConnection.select().table('knex').innerJoin('types', 'knex.id', 'types.id_hability').then(data => {
   
///// SE PRECISASSE POR WHERE COLOCAR DPS DO INNERJOIN(.., ..., ...).where(...)

  if(data){
    res.json(data);   
  }else{
  res.json('Not found');
  }
  
  }).catch(err => {
   res.json(err);
  });
  
  };




  //1 PRA 1       acima /\


  // 1 pra muitos 
  // igual acima porem o resultado que vier a lista de resultados, tu faz um foreach e poe um array
  //



  // muitos pra muitos     (no exemplo, 2 fk, aquela classica tabela que se liga com 2 tabelas)
  // ex:

  // knexConnection.select([      //escolhendo o que quer extrair
  //   "estudios.nome as estudio_nome",       // passando alias pq campos tem mesmo nome ('nome')
  //   "games.nome as game_nome",
  //   "games.preco"
  // ]).table("games_estudios")     // table que liga as duas tabelas - padrão 
  // .innerJoin("games", "games.id", "games_estudios.game_id")   // tabela games 
  // .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")  // tabela estudios
  // .where("estudios.id", 2)    // wheree...
  // .then(data => {
  //   console.log(data);
  //     }).catch(err => {
  //      res.json(err);
  //     });

