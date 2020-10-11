const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const create = user => usersRepo.create(user);
const getById = id => usersRepo.getById(id);
const update = (id, user) => usersRepo.update(id, user);
const del = id => usersRepo.del(id);

module.exports = { getAll, create, getById, update, del };
