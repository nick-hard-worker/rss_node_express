const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);

  if (user) res.json(User.toResponse(user));
  else res.status(404).send('Not found.');
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.create(req.body);

  res.json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);

  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const isDeleted = await usersService.del(req.params.id);

  if (isDeleted) res.status(204).send();
  else res.status(404).send('Not found.');
});

module.exports = router;
