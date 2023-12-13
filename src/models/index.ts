import User from './User.model'
import Role from './Role.model'
import Key from './Key.model'

import mongoose from 'mongoose'
mongoose.Promise = global.Promise

interface Database {
  mongoose: typeof mongoose
  User: typeof User
  Role: typeof Role
  Key: typeof Key
}

const db: Database = {
  mongoose: mongoose,
  User: User,
  Role: Role,
  Key: Key
}

export default db
