const axiosist = require('axiosist');
const app = require('../../api/server');
const fixtures = require('../fixtures/register');
const connection = require('../../services/connectionPromise');

jest.setTimeout(20000);

jest.mock('../../services/connectionPromise');

describe('POST /register', () => {
  const axios = axiosist(app);

  afterAll(() => {
    connection.connectionPromise.mockRestore();
  });

  describe('When register failed', () => {
    describe('when name is invalid', () => {
      let response;

      beforeAll(async () => {
        response = await axios.post('/register', fixtures.invalidName);
      });

      it('returns a 400 http status code', () => {
        expect(response.status).toBe(400);
      });

      it('returns a `Invalid Fields` error message', () => {
        expect(response.data.message).toBe('Invalid Fields');
      });
    });

    describe('when email is invalid', () => {
      let response;

      beforeAll(async () => {
        response = await axios.post('/register', fixtures.invalidEmail);
      });

      it('returns a 400 http status code', () => {
        expect(response.status).toBe(400);
      });

      it('returns a `Invalid Fields` error message', () => {
        expect(response.data.message).toBe('Invalid Fields');
      });
    });

    describe('when password is invalid', () => {
      let response;

      beforeAll(async () => {
        response = await axios.post('/register', fixtures.invalidPassword);
      });

      it('returns a 400 http status code', () => {
        expect(response.status).toBe(400);
      });

      it('returns a `Invalid Fields` error message', () => {
        expect(response.data.message).toBe('Invalid Fields');
      });
    });

    describe('when role is invalid', () => {
      let response;

      beforeAll(async () => {
        response = await axios.post('/register', fixtures.invalidRole);
      });

      it('returns a 400 http status code', () => {
        expect(response.status).toBe(400);
      });

      it('returns a `Invalid Fields` error message', () => {
        expect(response.data.message).toBe('Invalid Fields');
      });
    });

    describe('when email is already registered', () => {
      let response;

      beforeAll(async () => {
        connection.connectionPromise.mockResolvedValue({ email: 'test@teste.com' });
        response = await axios.post('/register', fixtures.validRegister);
      });

      it('returns a 400 http status code', () => {
        expect(response.status).toBe(400);
      });

      it('returns a `The email already registered` error message', () => {
        expect(response.data.message).toBe('The email already registered');
      });
    });
  });

  describe('When register is correct', () => {
    let response;

    beforeAll(async () => {
      connection.connectionPromise.mockResolvedValue([]);
      response = await axios.post('/register', fixtures.validRegister);
    });

    it('returns a 200 http status code', () => {
      expect(response.status).toBe(200);
    });

    it('returns a `Registered successfully` message', () => {
      expect(response.data.message).toBe('Registered successfully');
    });
  });
});
