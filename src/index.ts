
import express from 'express'
import bootstrap from './routes/index.routes'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || 6000

bootstrap(app, express)
app.listen(port, () => console.log(` app listening on port ${port}!`)) 
