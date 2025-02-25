import express  from 'express'
import { register, update,login } from '../controllers/user.controller';

const router = express.Router()


// register user
router.post('/', register);


// update user profile
router.put('/:id',update)

// login

router.post('/login', login);





export default router;

