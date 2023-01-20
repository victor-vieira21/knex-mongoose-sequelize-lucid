import { Router } from 'express';

import { getController, insertController, updateController, deleteController } from '../controllers';

const router = Router();

router.get('/getAll', getController.getAll);
router.get('/getByEmail', getController.getByEmail);
router.get('/getByName', getController.getByFirstName);
router.get('/getAgeMaiorQue', getController.getIdadeMaiorQue);

router.post('/insert', insertController.insert);

router.post('/updateMany', updateController.updateMuitosDeUmaVez);
router.post('/updateAgeByEmail', updateController.updateOne);
router.post('/update', updateController.searchAndUpdate);

router.post('/delete', deleteController.DestroyOne);


export default router;