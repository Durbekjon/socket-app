import { Server } from 'socket.io'

const socketIo = (server) => {
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log('Client connected')
    socket.on('disconnect', () => {
      console.log('Client disconnected')
    })
  })
}

export default socketIo
