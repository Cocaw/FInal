const jwt = require('jsonwebtoken')
dotEnv=require("dotenv").config()


const generateToken = (data) => {
  const token = jwt.sign(
    {
      username: data
    },
    process.env.SECRET,
    { expiresIn: '120d' }
  )

  return token
}

module.exports = generateToken
