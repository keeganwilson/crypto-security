const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const auth = bcrypt.compareSync(password, users[i].passwordHash)
          if (auth) {
            let returnUser = {...users[i]}
            delete returnUser.passwordHash
          }
          res.status(200).send(returnUser)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const salt = bcrypt.genSaltSync(5);
      const passwordHash = bcrypt.hashSync(password, salt)
      let user = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }
      users.push(user)
      let userDisplay = {...user}
      delete userDisplay.passwordHash      
      res.status(200).send(userDisplay)
    }
}