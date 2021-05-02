import * as Knex from 'knex';
import { table } from 'node:console';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('books', (table) => {
    table.string('description', 10000).notNullable().alter();
    table.string('cover_url', 2000).notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('books', (table) => {
    table.string('description').notNullable().alter();
    table.string('cover_url').notNullable().alter();
  });
}
