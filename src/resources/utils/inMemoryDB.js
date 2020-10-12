const User = require('../users/user.model');
const Board = require('../boards/board.model');
const Task = require('../tasks/task.model');

const db = {
  Users: [new User(), new User(), new User()],
  Boards: [new Board(), new Board()]
};

db.Tasks = [
  new Task({ boardId: db.Boards[0].id }),
  new Task({ boardId: db.Boards[0].id }),
  new Task({ boardId: db.Boards[1].id }),
  new Task({ boardId: db.Boards[1].id })
];

const getAll = async (entityName, idBoard) => {
  if (entityName === 'Tasks') {
    return db[entityName].filter(el => el.boardId === idBoard);
  }

  return db[entityName]; // return Users and Boards
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

  if (index !== undefined) return (db[entityName][index] = { ...user });
};

const del = async (entityName, id) => {
  if (entityName === 'Boards') {
    // remove all tasks of this board
    db.Tasks = db.Tasks.filter(el => el.boardId !== id);
  }

  if (entityName === 'Users') {
    // unassign user's tasks
    db.Tasks.map(el => {
      if (el.userId === id) el.userId = null;
    });
  }

  const index = db[entityName].findIndex(el => el.id === id);
  // console.log(index);
  if (index !== -1) {
    db[entityName].splice(index, 1);
    return true;
  }
};

module.exports = { getAll, getById, save, update, del };
