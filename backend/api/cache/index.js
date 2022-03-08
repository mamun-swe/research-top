const redis = require("redis")
const REDIS_PORT = process.env.REDIS_PORT
const redisClient = redis.createClient(REDIS_PORT)

// Category cache
const Category = async (req, res, next) => {
    try {
        const key = "category"
        redisClient.get(key, (error, results) => {
            if (results) {
                return res.status(200).json({
                    status: true,
                    data: JSON.parse(results)
                })
            } else {
                next()
            }
        })
    } catch (error) {
        if (error) next(error)
    }
}


module.exports = {
    redisClient,
    Category
}