import express, { Express } from 'express'

import AuthRouter from './auth.routes'

const serverRoute: Express = express()

serverRoute.use('/auth', AuthRouter)

export default serverRoute
