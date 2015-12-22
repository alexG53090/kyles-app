
exports.up = function(knex, Promise) {
  knex.schema.createTable(function(table){
    table.increments();
    table.string('name');
    table.integer('coolness');
    table.boolean('alive');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('kyle_table')
};
