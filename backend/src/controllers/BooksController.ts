import { Request, Response } from 'express';

import db from '../database/connection';

export default class BooksController {
  async index(req: Request, res: Response) {
    const books = await db('books');
    return res.json({
      books,
    });
  }

  async search(req: Request, res: Response) {
    const per_page: any = req.query.per_page || 10;
    let page: any = req.query.current_page || 1;
    if (page < 1) page = 1;
    const offset = (page - 1) * per_page;

    return Promise.all([
      db('books')
        .where('name', 'like', `%${req.query.text}%`)
        .orWhere('author', 'like', `%${req.query.text}%`)
        .orWhere('description', 'like', `%${req.query.text}%`)
        .count()
        .first(),

      db('books')
        .where('name', 'like', `%${req.query.text}%`)
        .orWhere('author', 'like', `%${req.query.text}%`)
        .orWhere('description', 'like', `%${req.query.text}%`)
        .offset(offset)
        .limit(per_page),
    ]).then(([total, rows]) => {
      const pagination = {
        total: 0,
        per_page: 0,
        offset: 0,
        to: 0,
        last_page: 0,
        current_page: 0,
        from: 0,
        has_more: false,
      };
      const count = (total as any)['count(*)'];
      pagination.total = count;
      pagination.per_page = per_page;
      pagination.offset = offset;
      pagination.to = offset + rows.length;
      pagination.last_page = Math.ceil(count / per_page);
      pagination.current_page = page;
      pagination.from = offset;
      pagination.has_more = pagination.to < pagination.total;
      return res.json({
        books: rows,
        pagination,
      });
    });

    const books = await db('books')
      .where('name', 'like', `%${req.query.text}%`)
      .orWhere('author', 'like', `%${req.query.text}%`)
      .orWhere('description', 'like', `%${req.query.text}%`);
    return res.json({
      books,
    });
  }

  async recent(req: Request, res: Response) {
    const books = await db('books').orderBy('date_added', 'desc').limit(10);
    return res.json({
      books,
    });
  }

  async details(req: Request, res: Response) {
    const details = await db('books').where({ _id: req.query.id });
    return res.json({
      details: details[0],
    });
  }

  async create(req: Request, res: Response) {
    const { name, author, coverURL, description } = req.body;

    const trx = await db.transaction();

    try {
      await trx('books').insert({
        name,
        author,
        cover_url: coverURL,
        description,
        date_added: db.fn.now(),
      });
      await trx.commit();
      return res.status(201).json({
        status: 'OK',
      });
    } catch (e) {
      await trx.rollback();
      console.log(e);
      return res.status(400).json({
        error: 'Unexpected error while creating new User',
      });
    }
  }
}
