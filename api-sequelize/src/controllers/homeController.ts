import { Request, Response } from 'express';

// import { sequelize } from '../instances/mysql';   // usado pro authenticate

import { User } from '../models/User';

import { Op } from 'sequelize'

export const home = async (req: Request, res: Response)=>{
    
    // try {
    //     await sequelize.authenticate();
    //     console.log('beleza');
    // } catch(error) {
    //     console.log(error);
    // }



    /// banco

    let users = await User.findAll({

       
       // attributes: ['name', 'age']    // seleciona só name e age em vez de selecionar tudo 
       // attributes: { exclude: ['id'] }  //  manda o resultado excluindo o parametro id


       // where: { name: 'Victor', age: 27}   ///  WHERE 

       // where: {
       //     age: [55, 90, 23, 40]   // buscou com age 55, 90, 23 etc... 
       //    }



       ////////////////// PARA PESQUISAR MAIS DETALHADAS USAR O { Op } do sequelize.   ////////////////////


        ///////////// OPERAÇÃO DE OU      [Op.or]: 
        
        // where: {  
        // [Op.or]: [
        //     { age: 1 },
        //     { name : 'Victor'}   //  buscou com age 1 OU name 'Victor'  
        // ]
        //}


        //////////// OPERAÇÃO DE MAIOR / MAIOR E IGUAL   > /  >=   [Op.gt] / [Op.gte] ///////////////////
        //////////// OPERAÇÃO DE MENOR / MENOR E IGUAL   < / <=   [Op.lt] / [Opl.lte] ///////////////////

        // where: {
        //     age: {
        //         [Op.gte]: 1,    // resultado da query:   SELECT `id`, `name`, `age` FROM `users` AS `User` WHERE (`User`.`age` >= 1 AND `User`.`age` <= 5);
        //         [Op.lte]: 25      // a virgula representa o AND 
        //     }
        // }

                // between faz mesma coisa do feito acima.   [Op.between]: [1, 25]   
                // e o notBetween pega todos que não estão entre os numeros do array  [Op.notBetween]: [1, 25]



        //////////// OPERAÇÃO DE LIKE ///////////////////////////

        // where: {
        //     name: {
        //         [Op.like]: '%i%',     ///SELECT `id`, `name`, `age` FROM `users` AS `User` WHERE `User`.`name` LIKE 'Vi%';
        //     },
        //     age: {
        //         [Op.gte]: 1,
        //         [Op.lte]: 2
        //     }
        // }
        
//   RESULTADO DO WHERE ACIMA PEGANDO NOME QUE CONTENHA I E IDADE MAIOR IGUAL A 1 E MENOR IGUAL 2 
//      QUERY: SELECT `id`, `name`, `age` FROM `users` AS `User` WHERE `User`.`name` LIKE '%i%' AND (`User`.`age` >= 1 AND `User`.`age` <= 2);
//      RESULTADO: [{"id":6,"name":"Tekinha","age":1}]




   ////////////////// ORDENAÇÃO ///////////////////////////////// 

   where: {
      age: {
        [Op.gte]: 1
      }
    },
    // order: ['name']    VEM EM ASC, COMPORTAMENTO PADRÃO

    order: [
        ['age', 'ASC'],
        ['name', 'DESC']   // EM DECRECENTE
    ],

     // limitação por pagina

    limit: 10,
     
    // quando começar a exibir    // 
    // exemplo, em uma resposta com 10 itens, se o limit for 5 e o offset for 5
    //vira 5 resultados começando a partir do 5º (ou seja, 6,7,8...)
    
    offset: 0


        
    });

    //   console.log(users);

    // console.log('-');
    // console.log(JSON.stringify(users));








    ////////////////////////////////////////////////////////////////////////////////////
};