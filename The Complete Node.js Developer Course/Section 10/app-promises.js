const users = [{
  id: 1,
  name: 'Maarten',
  school_id: 1
}, {
  id: 2,
  name: 'Rianne',
  school_id: 2
}]

const grades = [{
  id: 1,
  school_id: 1,
  grade: 7
},
{
  id: 2,
  school_id: 2,
  grade: 8
},
{
  id: 3,
  school_id: 1,
  grade: 6
}]

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id)

    if (user) {
      resolve(user)
    } else {
      reject(`Unable to find user with id of ${id}.`)
    }
  })
}

const getGrades = (school_id) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter((grade) => grade.school_id === school_id))
  })
}

const getStatus = (user_id) => {
  let user
  return getUser(user_id).then((temp_user) => {
    user = temp_user
    return getGrades(user.school_id)
  }).then((grades) => {
    let average = 0

    if (grades.length > 0) {
      average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
    } 

    console.log(`${user.name} has a ${average} in the class.`)
  })
}

const getStatusAlt = async (user_id) => {
  const user = await getUser(user_id)
  const grades = await getGrades(user.school_id)

  let average = 0

    if (grades.length > 0) {
      average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
    } 

    return `${user.name} has a ${average} in the class.`
}

getStatusAlt(1).then((user) => {
  console.log(user)
}).catch((err) => {
  console.log(err)
})

// getStatus(1).then((grades) => {
//   console.log(grades)
// }).catch((err) => {
//   console.log(err)
// })
