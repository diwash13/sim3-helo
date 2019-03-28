module.exports = {
    getPosts: (req, res) => {
        const db = req.app.get('db')

        db.get_posts().then(posts => {
            res.status(200).send(posts)
        })
    },

    getPost: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.get_post([id]).then(post => {
            res.status(200).send(post[0])
        })
    }
}

