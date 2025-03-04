import express, { Router }  from 'express'
import { create,getAll } from '../controllers/review.controller';
import { Authenticate } from '../middlewares/authentication.middleware';

const router:Router = express.Router()


// create review
router.post('/', Authenticate(), create);

// get all reviews
router.get('/', getAll);




export default router;

