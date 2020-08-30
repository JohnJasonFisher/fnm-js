const user_router = require('express').Router()

user_router.get('/', (req, res) => {
	const users = [
		'John',
		'Max',
		'Pul',
		'Khalil'
	]
	res.send(users)
})

module.exports = user_router