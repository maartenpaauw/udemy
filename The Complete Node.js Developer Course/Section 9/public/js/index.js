var socket = io()

socket.on('connect', function () {
  console.log('Connected to server')

  socket.emit('createMessage', {
    to: 'maartenpaauw@gmail.com',
    text: 'Hello, How are you doing?',
    created_at: new Date()
  })
})

socket.on('disconnect', function () {
  console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
  console.log('Message', message)
})
