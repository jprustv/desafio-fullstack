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
    const books = await db('books')
      .where('name', 'like', `%${req.query.text}%`)
      .orWhere('author', 'like', `%${req.query.text}%`)
      .orWhere('description', 'like', `%${req.query.text}%`);
    return res.json({
      books,
    });
  }

  async recent(req: Request, res: Response) {
    const books = await db('books').orderBy('date_added', 'desc').limit(9);
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
