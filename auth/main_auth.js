const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1]//ERROR
        const decoded = jwt.verify(token, "__recret__")
        req.username = decoded
        next()
    } catch (error) {
        res.status(401)
        res.json({ code: 4, msg: "no tiene autorizacion para ver el contenido " })
    }
}

module.exports = auth