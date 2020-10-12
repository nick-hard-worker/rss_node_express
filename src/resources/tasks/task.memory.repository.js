const Task = require('./task.model');
const entityName = 'Tasks';
const db = require('../utils/inMemoryDB');

const getAll = async idBoard => {
  return await db.getAll(entityName, idBoard);
};

const getById = async id => {
  return await db.getById(entityName, id);
};

const create = async (idBoard, task) => {
  const newEntity = new Task({ ...task, boardId: idBoard });
  return await db.save(entityName, newEntity);
};

const update = async (id, task) => {
  return await db.update(entityName, id, task);
};

const del = async (idBoard, id) => {
  const task2del = await db.getById(entityName, id);
  if (task2del && task2del.boardId === idBoard) {
    return await db.del(entityName, id);
  }
};

module.exports = { getAll, create, getById, update, del };
