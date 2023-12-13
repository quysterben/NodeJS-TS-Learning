import { Router } from 'express'

import UserController from '~/controllers/user.controller'

const UserRouter = Router()

UserRouter.get('/', UserController.getAllUsers)

export default UserRouter
