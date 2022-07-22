const User = require('./../model/User')

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({
            data: user
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}