import * as Knex from 'knex';
import fs from 'fs';

import path from 'path';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('books').del();

  const sql = fs
    .readFileSync(path.join(__dirname, '/initial_books.sql'))
    .toString();

  // Inserts seed entries from .SQL file
  await knex.raw(sql);
}
