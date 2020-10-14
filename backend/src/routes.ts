import {Router} from 'express'
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array('images') ,OrphanagesController.create);

export default routes;


// {
// 	"name": "JOasJO",
// 	"latitude": -27.2104339,
// 	"longitude":-49.629111,
// 	"about": "Sobre o orfanato",
// 	"instructions": "Visite-nos",
// 	"opening_hours": "8 as 18hrs",
// 	"open_on_weekends": true
// }