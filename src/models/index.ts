import mongoose from 'mongoose'
mongoose.Promise = global.Promise

interface Database {
  mongoose: typeof mongoose
}

const db: Database = {
  mongoose: mongoose
}

export default db
