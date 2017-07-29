module.exports.add = (a, b) => a + b
module.exports.subtract = (a, b) => a - b
module.exports.square = (a, b) => a * b

module.exports.setName = (user, fullName) => {
  var names = fullName.split(" ")
  user.firstName = names[0]
  user.lastName = names[1]
  return user
}
