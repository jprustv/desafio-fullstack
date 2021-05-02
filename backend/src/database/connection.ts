import conn from '../knexfile';
import knex from 'knex';

const db = knex(conn);

db.on('query', (query) => {
  // console.log do query executado, em amarelo
  console.log('\x1b[33m%s\x1b[0m', query.sql);
});

export default db;
