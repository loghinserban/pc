
const request = require('supertest');
const app = require('../server');

describe('API Integration Tests', () => {
    it('should login successfully', async () => {
        const res = await request(app).post('/api/auth/login').send({ username: 'student1', password: 'password123' });
        expect(res.statusCode).toEqual(200);
    });
});
