import * as Knex from 'knex';
import { table } from 'node:console';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('books', (table) => {
    table.dateTime('date_added').notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('books', (table) => {
    table.date('date_added').notNullable().alter();
  });
}
