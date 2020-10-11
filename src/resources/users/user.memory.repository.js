const User = require('./user.model');

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  // return [];
  const users = [new User(), new User(), new User()];
  return users;
};

module.exports = { getAll };
