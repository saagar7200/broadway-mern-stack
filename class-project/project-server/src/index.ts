import 'dotenv/config'
import express from 'express';
import {connectDatabase} from './config/database.config';
import userRoutes from './routes/user.routes'

const app = express();
const PORT = process.env.PORT || 8000
const DB_URI = process.env.DB_URI || ''

connectDatabase(DB_URI)


// using routes
app.use('/api/v1/user',userRoutes)






app.listen(PORT,() => console.log(`Server is running at http://localhost:${PORT}`))