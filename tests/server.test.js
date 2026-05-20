const request = require("supertest");
const app = require("../server");

describe("Task Management API", () => {

    test("GET / should return API running message", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Task Management API Running");
    });

    test("GET /tasks should return tasks", async () => {

        const response = await request(app).get("/tasks");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("POST /tasks should create a new task", async () => {

        const response = await request(app)
            .post("/tasks")
            .send({
                title: "Learn Jenkins"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe("Learn Jenkins");
    });

});