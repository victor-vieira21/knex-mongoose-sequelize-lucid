import { Router } from 'express';

import { getController, insertController, deleteController, updateController, transaction } from '../controllers';

const router = Router();

router.get('/getAll', getController.getAll);
router.get('/getNH', getController.getNameHability);
router.get('/get/:id', getController.getForId);
router.get('/getMore/:id', getController.getMore);
router.get('/getWithJoin', getController.getWithJoin);

router.post('/insert', insertController.insert);
router.post('/insertAssoc', insertController.insertAssoc);

router.get('/personalizada', getController.personalizada);

router.post('/update', updateController.update);

router.post('/delete/:id', deleteController.destroy);



router.post('/transaction', transaction.insertWithTransaction);


export default router;