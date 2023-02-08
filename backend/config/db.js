const mongoose = require('mongoose')

mongoose.set('strictQuery', true) // This will throw an error if you try to query a field that doesn't exist in the schema

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB