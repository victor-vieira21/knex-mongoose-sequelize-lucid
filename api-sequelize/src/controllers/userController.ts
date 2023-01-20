// import { Request, Response } from 'express';
// import { User } from '../models/User';

// export const idadeAction = (req: Request, res: Response) => {
//     let mostrarIdade: boolean = false;
//     let idade: number = 0;

//     if(req.body.ano) {
//         let anoNascimento: number = parseInt(req.body.ano as string);
//         let anoAtual: number = new Date().getFullYear();
//         idade = anoAtual - anoNascimento;
//         mostrarIdade = true;
//     }

//     res.render('pages/idade', {
//         idade,
//         mostrarIdade
//     });
// };

// export const addIdade = async (req: Request, res: Response) => {
//     let id: string = req.params.id;

//     let results = await User.findAll({ where: {id} });
//     if(results.length > 0) {
//         let usuario = results[0];
//         usuario.age++;
//         await usuario.save();
//     }

//     res.redirect('/');
// }
// export const diminuirIdade = async (req: Request, res: Response) => {
//     let id: string = req.params.id;

//     let results = await User.findAll({ where: {id} });
//     if(results.length > 0) {
//         let usuario = results[0];
//         usuario.age--;
//         await usuario.save();
//     }

//     res.redirect('/');
// }
// export const excluir = async (req: Request, res: Response) => {
//     let id: string = req.params.id;

//     await User.destroy({ where: { id: id } });

//     res.redirect('/');
// }