const Board = require('./board.model');
const entityName = 'Boards';
const db = require('../utils/inMemoryDB');

const getAll = async () => {
  return await db.getAll(entityName);
};

const getById = async id => {
  return await db.getById(entityName, id);
};

const create = async board => {
  const newEntity = new Board(board);
  return await db.save(entityName, newEntity);
};

const update = async (id, board) => {
  return await db.update(entityName, id, board);
};

const del = async id => {
  return await db.del(entityName, id);
};

module.exports = { getAll, create, getById, update, del };
