import mongoose from 'mongoose'

const directChatSchema = new mongoose.Schema({
  users: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
})

const DirectChat = mongoose.model('DirectChat', directChatSchema)

export default DirectChat
