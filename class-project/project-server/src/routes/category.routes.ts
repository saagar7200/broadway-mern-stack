import express  from 'express'
import { create,getAll } from '../controllers/category.controller';

const router = express.Router()


// create category
router.post('/', create);

// get all category
router.get('/', getAll);




export default router;

