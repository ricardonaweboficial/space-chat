exports.up = function(knex) {
  	return knex.schema.createTable('friends', function (table) {
		table.increments();
	
		table.string('user_name_friend').notNullable();
		table.string('user_name_owner');

		table.foreign('user_name_owner').references('user_name').inTable('users');
	});
};

exports.down = function(knex) {
  	return knex.schema.dropTable('users');
};
