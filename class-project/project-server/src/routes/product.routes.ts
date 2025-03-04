import express  from 'express'
import { create,getAll,getById } from '../controllers/product.controller';
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + file.originalname)
    }
  })

const upload = multer({ storage:storage })


// create product
router.post('/', upload.fields([
    {
        name:'coverImage',
        maxCount:1
    },
    {
        name:'images',
        maxCount:6
    }
]), create);

router.get('/', getAll);
router.get('/:id', getById);







export default router;

