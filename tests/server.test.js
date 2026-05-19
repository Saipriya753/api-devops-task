const request = require('supertest');
const app = require('../server');

describe('Task API Tests', () => {

    test('GET / should return Task API Running', async () => {

        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Task API Running');

    });

    test('GET /health should return OK', async () => {

        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('OK');

    });

    test('POST /tasks should create a task', async () => {

        const response = await request(app)
            .post('/tasks')
            .send({
                title: 'Test Task'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe('Test Task');

    });

});