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

  $message = $('[name=message]')

  socket.emit('createMessage',  {
    from: 'User',
    text: $message.val()
  }, function () {
    $message.val('')
  })
})

var $locationButton = $('#send-location')

$locationButton.on('click', function () {
  if(!navigator.geolocation) {
    return alert('No GEO location support.')
  }

  $locationButton.attr('disabled', 'disabled').text('Sending location...')

  navigator.geolocation.getCurrentPosition(function(position) {
    $locationButton.removeAttr('disabled').text('Send location')
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function() {
    $locationButton.removeAttr('disabled').text('Send location')
    alert('Something went wrong...')
  })
})
