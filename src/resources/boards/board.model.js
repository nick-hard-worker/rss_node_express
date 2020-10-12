const uuid = require('uuid');

class Board {
  constructor({ id = uuid(), title = 'board title X', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
