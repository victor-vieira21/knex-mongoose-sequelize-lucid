import { Router } from 'express';

import { homeController, insertController, getController, updateController } from '../controllers';

const router = Router();

router.post('/insert', insertController.insert);
router.post('/insert-com-create', insertController.create);

router.get('/consulta', getController.consulta);

router.post('/update', updateController.update);

// router.get('/usuario/:id/mais', userController.addIdade);
// router.get('/usuario/:id/menos', userController.diminuirIdade);
// router.get('/usuario/:id/excluir', userController.excluir);

export default router;