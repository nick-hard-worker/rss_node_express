const User = require('./user.model');
const DB = require('../utils/inMemoryDB');
const users = DB.users;

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return users;
};

const getById = async id => {
  return users.find(el => el.id === id);
};

const create = async user => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const update = async (id, user) => {
  const index = users.findIndex(el => el.id === id);

  if (index) {
    users[index].name = user.name;
    users[index].login = user.login;
    users[index].password = user.password;
  }

  return users[index];
};

const del = async id => {
  const index = users.findIndex(el => el.id === id);
  users.splice(index, 1);
  return true;
};

module.exports = { getAll, create, getById, update, del };
