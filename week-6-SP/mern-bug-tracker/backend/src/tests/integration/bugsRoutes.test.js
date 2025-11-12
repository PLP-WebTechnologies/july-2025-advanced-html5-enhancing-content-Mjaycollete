const request = require('supertest');
const app = require('../../app');
const Bug = require('../../models/Bug');

jest.mock('../../models/Bug'); // mock the model

describe('Bugs API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('POST /api/bugs creates a bug', async () => {
    Bug.prototype.save = jest.fn().mockResolvedValue({
      _id: '1', title: 'Test', description: 'desc', status: 'open'
    });

    const res = await request(app).post('/api/bugs').send({ title: 'Test', description: 'desc' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test');
  });

  test('GET /api/bugs returns list', async () => {
    Bug.find = jest.fn().mockResolvedValue([{ _id: '1', title: 'Test' }]);
    const res = await request(app).get('/api/bugs');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
