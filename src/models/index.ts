// Dependencies
import * as mongoose from 'mongoose'

// Connect to mongoose with error handling
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
})

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('📦 Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.error('💥 MongoDB connection error:', err)
  process.exit(1)
})

mongoose.connection.on('disconnected', () => {
  console.log('📦 Disconnected from MongoDB')
})

// Get models
import { addRaffle, getRaffle, Raffle, getRaffleWithoutParticipantIds, RaffleModel } from './raffle'
// Export models
export { addRaffle, getRaffle, Raffle, getRaffleWithoutParticipantIds, RaffleModel }
