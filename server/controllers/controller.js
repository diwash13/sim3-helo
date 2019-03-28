const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const { session } = req
        const db = req.app.get('db')
        let takenUserName = await db.check_username({ username })
        takenUserName = +takenUserName[0].count
        if(takenUserName !== 0) {
            return res.sendStatus(409)
        }
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        let user = await db.register({username, password:hash})
        user = user[0]
        session.user = user
        res.status(200).send(session.user)
    },

    login: async (req, res) => {
        const { username, password } = req.body
        const { session } = req
        const db = req.app.get('db')
        let user = await db.login({ username })
        user = user[0]
        if(!user) {
            return res.sendStatus(401)
        }
        let authenticated = bcrypt.compareSync(password, user.password)
        if(authenticated) {
            delete user.password
            session.user = user
            res.status(200).send(session.user)
        } else {
            res.sendStatus(401)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        const { user } = req.session
        if(user) {
            res.status(200).send(user)
        } else {
            res.sendStatus(401)
        }
    }
}