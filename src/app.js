const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/', (req, res) => {
	const users = [
		'John',
		'Max',
		'Pul',
		'Khalil'
	]
	res.send(users)
})

app.listen(8000, () => {
	console.log('fnm-js listening on port 8000!')
})