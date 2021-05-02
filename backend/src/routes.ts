import express from 'express';

import BooksController from './controllers/BooksController';

const routes = express.Router();

const booksController = new BooksController();

routes.get('/books', booksController.index);
routes.post('/books', booksController.create);

export default routes;
