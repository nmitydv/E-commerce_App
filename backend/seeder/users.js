const bcrypt = require("bcryptjs")
const ObjectId = require("mongodb").ObjectId;

const users = [
      {
    name: 'Namit',
    lastName: 'Yadav',
    email: 'yadavnamit@gmail.com',
    password: bcrypt.hashSync('yadavnamit', 10),
    isAdmin: true,
  },
  {
      _id: ObjectId("625add3d78fb449f9d9fe2ee"),
    name: 'Prabal',
    lastName: 'yadav',
    email: 'prabalyadav@gmail.com',
    password: bcrypt.hashSync('prabalyadav', 10),
  },
]

module.exports = users