exports.up = (knex) => {
  return knex.schema.createTable("employee", (tbl) => {
    tbl.increments("id");
    tbl.text("first_name").notNullable();
    tbl.text("last_name").notNullable();
    tbl.text("email").notNullable();
    tbl.boolean("active").notNullable().defaultTo(true);

    tbl.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("employee");
};
