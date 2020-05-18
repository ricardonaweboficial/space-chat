exports.up = function(knex) {
  	return knex.schema.createTable('friends', function (table) {
		table.increments();

		table.string('name').notNullable();
		table.string('email').notNullable();

		table.string('user_id')

		table.foreign('user_id').references('id').inTable('users');
	});
};

exports.down = function(knex) {
  	return knex.schema.dropTable('users');
};
