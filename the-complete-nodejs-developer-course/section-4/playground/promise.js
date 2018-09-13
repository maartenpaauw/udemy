var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be numbers.')
      }
    }, 1500)
  })
}

asyncAdd(1, 2).then((message) => {
  console.log('Success:', message)
  return asyncAdd(message, 33)
}).then((message) => {
  console.log('Success:', message)
}).catch((message) => {
  console.log(message)
})

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey. It worked!')
    // reject('Unable to fulfill promise...')
  }, 2500)
})

somePromise.then((message) => {
  console.log('Success:', message)
}).catch((message) => {
  console.log('Failed:', message)
})
