import express from 'express';

import BooksController from './controllers/BooksController';

const routes = express.Router();

const booksController = new BooksController();

routes.get('/books', booksController.index);
routes.post('/books', booksController.create);
routes.get('/books/recent', booksController.recent);
routes.get('/books/details', booksController.details);
routes.get('/books/search', booksController.search);

export default routes;
