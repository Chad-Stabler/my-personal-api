const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');
const Game = require('../lib/models/Game');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('getAll should return a list of game titles with ids', async () => {
    const resp = await Game.getAll();
    expect(resp.length).toEqual(10);
    expect(resp[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      release_year: expect.any(Number),
      genre: expect.any(String),
      main_developer: expect.any(String),
      open_world: expect.any(Boolean)
    });
  });
  it('getById should return a single game of data', async () => {
    const resp = await Game.getById(3);

    expect(resp).toEqual({
      id: '3',
      title: 'Call of Duty: World at War',
      release_year: 2008,
      genre: 'FPS',
      main_developer: 'Treyarch',
      open_world: false
    });
  });
  afterAll(() => {
    pool.end();
  });
});
