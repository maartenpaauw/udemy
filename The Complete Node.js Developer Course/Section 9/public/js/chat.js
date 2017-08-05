const socket = io()

function scrollToBottom () {
  const $messages = $('#messages')
  const $newMessage = $messages.children('li:last-child')

  const clientHeight = $messages.prop('clientHeight')
  const scrollTop = $messages.prop('scrollTop')
  const scrollHeight = $messages.prop('scrollHeight')
  const newMessageHeight = $newMessage.innerHeight()
  const lastMessageHeight = $newMessage.prev().innerHeight()

  if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
    $messages.scrollTop(scrollHeight)
  }
}

socket.on('connect', function () {
  const params = $.deparam(window.location.search)
  
  socket.emit('join', params, function (err) {
    if (err) {
      alert(err)
      window.location.href = '/'
    } else {
      console.log('No error.')
    }
  })
})

socket.on('disconnect', function () {
  console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
  const template = $('#message-template').html()
  const time = moment(message.created_at).format('h:mm a')
  const html = Mustache.render(template, {
    from: message.from,
    text: message.text,
    created_at: time
  })
  $('#messages').append(html)
  scrollToBottom()
})

socket.on('newLocationMessage', function (message) {
  const template = $('#location-message-template').html()
  const time = moment(message.created_at).format('h:mm a')
  const html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    created_at: time
  })
  $('#messages').append(html)
  scrollToBottom()
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
