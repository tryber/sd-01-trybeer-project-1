const axiosist = require('axiosist');
const app = require('../../api/server');
const fixtures = require('../fixtures/login');
const login = require('../../models/appBeer');

jest.setTimeout(20000);

describe('middleware rescue fail process', () => {
  const axios = axiosist(app);

  const testLogin = jest.spyOn(login, 'loginUser');

  afterAll(() => {
    testLogin.mockRestore();
  });

  describe('when has a error in the code', () => {
    let response;

    beforeAll(async () => {
      testLogin.mockRejectedValue(new Error('Invalid Fields'));
      response = await axios.post('/login', fixtures.validLogin);
    });

    console.log(response)

    it('mock error function loginUser', () => {
      expect(response.status).toBe(400);
      expect(response.data.message).toBe('Invalid Fields');
    });
  });
});
