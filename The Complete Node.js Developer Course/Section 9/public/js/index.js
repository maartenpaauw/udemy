const socket = io()

socket.on('connect', function () {
  console.log('Connected to server')
})

socket.on('disconnect', function () {
  console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
  console.log('Message', message)
  var li = $('<li></li>')
  li.text(`${message.from}: ${message.text}`)
  $('#messages').append(li)
})

// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'Hi!'
// }, function (message) {
//   console.log('Got it!', message)
// })

socket.on('newLocationMessage', function (message) {
  var li = $('<li></li>')
  var a = $('<a target="_blank">My current location</a>')
  li.text(`${message.from}: `)
  a.attr('href', `${message.url}`)
  li.append(a)
  $('#messages').append(li)
})

$('#message-form').on('submit', function (e) {
  e.preventDefault()

  socket.emit('createMessage',  {
    from: 'User',
    text: $('[name=message]').val()
  }, function () {
    $('[name=message]').val('')
  })
})

var $locationButton = $('#send-location')

$locationButton.on('click', function () {
  if(!navigator.geolocation) {
    return alert('No GEO location support.')
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function() {
    alert('Something went wrong...')
  })
})
