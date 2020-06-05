exports.up = function (knex) {
  return knex.schema.createTable("incidents", function (table) {
    table.increments("id");
    table.string("title", 255).notNullable();
    table.string("description", 255).notNullable();
    table.decimal("value", 255).notNullable();
    table.string("ongs_id").notNullable().unsigned();
    table.foreign("ongs_id").references("id").inTable("ongs");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("incidents");
};
