/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name', 120).notNullable();
    table.string('email', 100).notNullable();
    table.string('whatsapp', 13).notNullable();
    table.string('city', 255).notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ongs');
};
