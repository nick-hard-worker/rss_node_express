const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const idBoard = req.params.idBoard;
  const tasks = await tasksService.getAll(idBoard);
  res.json(tasks);
});

router.route('/:idTask').get(async (req, res) => {
  const task = await tasksService.getById(req.params.idTask);

  res.json(task);
});

router.route('/').post(async (req, res) => {
  const idBoard = req.params.idBoard;
  const newTask = await tasksService.create(idBoard, req.body);

  res.json(newTask);
});

router.route('/:idTask').put(async (req, res) => {
  const task = await tasksService.update(req.params.idTask, req.body);

  res.json(task);
});

router.route('/:idTask').delete(async (req, res) => {
  const idBoard = req.params.idBoard;
  const isDeleted = await tasksService.del(idBoard, req.params.idTask);
  console.log(isDeleted);
  if (isDeleted) res.status(204).send();
  else res.status(404).send('Not found.');
  console.log(res.statusCode);
});

module.exports = router;
