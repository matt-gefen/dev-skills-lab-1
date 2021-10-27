const skills = [
  {
    skill: 'SQL',
    description: 'Analytics Engineering really pays off.',
    from_seir: false,
    _id: 12345
  },
  {
    skill: 'Python',
    description: 'Refined my Python skills in a Data Science context at GA in Boston!',
    from_seir: false,
    _id: 24356
  },
  {
    skill: 'JavaScript',
    description: 'I\'ve loved learning to apply JS to create dynamic web pages!',
    fromSeir: true,
    _id: 23378
  },
  {
    skill: 'CSS',
    description: 'The tough work of making garbage look like treasure.',
    fromSeir: true,
    _id: 28398
  }
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('Dear lord...Where are your skills?!')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() * 1000000
  skill.fromSeir = true
  skills.push(skill)
  return callback(null, skill)
}


export {
  find, 
  findById,
  create
}