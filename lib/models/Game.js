const pool = require('../utils/pool');

module.exports = class Game {
  id;
  title;
  release_year;
  genre;
  main_developer;
  open_world;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.release_year = row.release_year;
    this.genre = row.genre;
    this.main_developer = row.main_developer;
    this.open_world = row.open_world;
  }

  static async getAll() {
    const { rows } = await pool.query('select * from games;');

    return rows.map(row => new Game(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('select * from games where id=$1;', [id]);

    return new Game(rows[0]);
  }
};
