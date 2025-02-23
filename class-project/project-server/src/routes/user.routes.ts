import express  from 'express'
import { register, update } from '../controllers/user.controller';

const router = express.Router()


// register user
router.post('/', register);


// update user profile
router.put('/:id',update)






export default router;

