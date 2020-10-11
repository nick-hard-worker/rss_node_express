const User = require('../users/user.model');

const db = {
  Users: [new User(), new User(), new User()]
};

const getAll = async entity => {
  return db[entity];
};

const getById = async (entity, id) => {
  return db[entity].find(el => el.id === id);
};

const create = async (entity, user) => {
  const newEntity = new User(user);
  db[entity].push(newEntity);
  return newEntity;
};

const update = async (entity, id, user) => {
  const index = db[entity].findIndex(el => el.id === id);

  if (index) return (db[entity][index] = { ...user });
};

const del = async (entity, id) => {
  const index = db[entity].findIndex(el => el.id === id);
  if (index) {
    db[entity].splice(index, 1);
    return true;
  }
};

module.exports = { getAll, getById, create, update, del };
