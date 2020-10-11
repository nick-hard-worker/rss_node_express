const User = require('../users/user.model');

const db = {
  Users: [new User(), new User(), new User()]
};

const getAll = async entityName => {
  return db[entityName];
};

const getById = async (entityName, id) => {
  return db[entityName].find(el => el.id === id);
};

const save = async (entityName, newEntity) => {
  db[entityName].push(newEntity);
  return newEntity;
};

const update = async (entityName, id, user) => {
  const index = db[entityName].findIndex(el => el.id === id);

  if (index) return (db[entityName][index] = { ...user });
};

const del = async (entityName, id) => {
  const index = db[entityName].findIndex(el => el.id === id);
  if (index) {
    db[entityName].splice(index, 1);
    return true;
  }
};

module.exports = { getAll, getById, save, update, del };
