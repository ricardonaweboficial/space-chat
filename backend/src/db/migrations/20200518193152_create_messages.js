exports.up = function(knex) {
	return knex.schema.createTable('messages', function (table) {
		table.increments();
		
		table.string('user_name_from').notNullable(); // Sender
		table.string('user_name_to').notNullable(); // Recipient
		table.string('message').notNullable();
		table.timestamp(true, true); // Date (Create and Update)

		table.foreign('user_name_from').references('user_name').inTable('users'); // User Name of owner
		
	});
};

exports.down = function(knex) {
  	return knex.schema.dropTable('messages');
};
