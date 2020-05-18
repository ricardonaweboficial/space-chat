const crypto = require('crypto');
const connection = require('../db/connection');

module.exports = {
	async index(req, res) {
		const response = await connection('users').select('*');

		if(!response) {
			return res.status(401).json({ error: 'Error in select all' });
		}

		return res.json(response);
	},

	async store(req, res) {
		const { user_name, name, surname, email, password } = req.body;
		const id = crypto.randomBytes(4).toString('HEX');

		const response = await connection('users').insert({
			id,
			user_name,
			name,
			surname,
			email,
			password
		});

		if(!response) {
			return res.json({ id, user_name });
		} 

		return res.status(401).json({ error: 'Error in create user, try another.' });

	},
}