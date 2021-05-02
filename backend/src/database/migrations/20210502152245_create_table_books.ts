import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('books', (table) => {
    table.increments('_id').primary();
    table.string('name').notNullable();
    table.string('author').notNullable();
    table.string('cover_url').notNullable();
    table.string('description').notNullable();
    table.date('date_added').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('books');
}
