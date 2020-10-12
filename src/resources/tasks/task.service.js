const tasksRepo = require('./task.memory.repository');

const getAll = idBoard => tasksRepo.getAll(idBoard);
const create = (idBoard, task) => tasksRepo.create(idBoard, task);
const getById = id => tasksRepo.getById(id);
const update = (id, task) => tasksRepo.update(id, task);
const del = (idBoard, id) => tasksRepo.del(idBoard, id);

module.exports = { getAll, create, getById, update, del };
