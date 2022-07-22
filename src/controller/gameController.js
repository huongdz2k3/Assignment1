const Game = require('./../model/Game')


exports.createGame = async (req, res) => {
    try {
        const game = await Game.create(req.body)
        return res.status(200).json({
            data: game
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}



