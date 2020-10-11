const User = require('./user.model');
const entityName = 'Users';
const db = require('../utils/inMemoryDB');

const getAll = async () => {
  return db.getAll(entityName);
};

const getById = async id => {
  return db.getById(entityName, id);
};

const create = async user => {
  const newEntity = new User(user);
  return db.save(entityName, newEntity);
};

const update = async (id, user) => {
  return db.update(entityName, id, user);
};

const del = async id => {
  return db.del(entityName, id);
};

module.exports = { getAll, create, getById, update, del };
