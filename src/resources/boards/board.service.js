const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const create = board => boardsRepo.create(board);
const getById = id => boardsRepo.getById(id);
const update = (id, board) => boardsRepo.update(id, board);
const del = id => boardsRepo.del(id);

module.exports = { getAll, create, getById, update, del };
