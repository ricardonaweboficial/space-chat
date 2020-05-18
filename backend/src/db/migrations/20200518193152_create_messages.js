exports.up = function(knex) {
	return knex.schema.createTable('messages', function (table) {
		table.increments();
		
		table.string('message').notNullable();
		table.timestamp(true, true);

		table.string('user_send');

		table.foreign('user_send').references('id').inTable('users');

	});
};

exports.down = function(knex) {
  	return knex.schema.dropTable('messages');
};
