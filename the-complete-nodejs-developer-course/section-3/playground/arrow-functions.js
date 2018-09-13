var square = x =>  x * x

console.log(square(12))

var user = {
  name: 'Maarten',
  sayHi () {
    console.log(arguments)
    console.log(`Hi. I'm ${this.name}!`)
  }
}

console.log(user.sayHi(1, 2, 3))