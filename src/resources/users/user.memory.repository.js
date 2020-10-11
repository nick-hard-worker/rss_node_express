// const User = require('./user.model');
const entity = 'Users';
const db = require('../utils/inMemoryDB');

const getAll = async () => {
  return db.getAll(entity);
};

const getById = async id => {
  return db.getById(entity, id);
};

const create = async user => {
  return db.create(entity, user);
};

const update = async (id, user) => {
  return db.update(entity, id, user);
};

const del = async id => {
  return db.del(entity, id);
};

module.exports = { getAll, create, getById, update, del };
