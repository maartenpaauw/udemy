console.log('Starting app')

setTimeout(() => {
  console.log('Inside of callback 1')
}, 2000)

setTimeout(() => {
  console.log('Inside of callback 2')
}, 0)

console.log('Finishing up')
