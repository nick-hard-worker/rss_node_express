const router = require('express').Router();
const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:idBoard').get(async (req, res) => {
  const board = await boardsService.getById(req.params.idBoard);

  res.json(board);
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardsService.create(req.body);

  res.json(newBoard);
});

router.route('/:idBoard').put(async (req, res) => {
  const board = await boardsService.update(req.params.idBoard, req.body);

  res.json(board);
});

router.route('/:idBoard').delete(async (req, res) => {
  const isDeleted = await boardsService.del(req.params.idBoard);

  if (isDeleted) res.status(204).send();
  else res.status(404).send('Not found.');
});

router.use('/:idBoard/tasks', taskRouter);

module.exports = router;
