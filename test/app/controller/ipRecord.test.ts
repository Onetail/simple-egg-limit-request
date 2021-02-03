import { app, mock } from 'egg-mock/bootstrap';

const ApiVer = 'api/v1';
const Prefix = 'ipRecord';
const maxLimit = 60;

mock.consoleLevel('NONE');
describe('test/app/controller/ipRecord.test.js', () => {
  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.ipRecord.deleteAllIpRecord();
  });
  afterEach(mock.restore);

  describe(`POST ${ApiVer}/${Prefix}/`, () => {
    it('200 post api can use', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/`)
        .expect(200);
      return result;
    });

    it('429 the same ip exceed maxLimit / per minute', async () => {
      const forLoop = async () => {
        for (let i = 0, max = maxLimit; i < max; i++) {
          await app.httpRequest().post(`/${ApiVer}/${Prefix}/`);
        }
        await app.httpRequest().post(`/${ApiVer}/${Prefix}/`).expect(429);
      };
      await forLoop();
    });
  });

  describe(`GET ${ApiVer}/${Prefix}/count`, () => {
    it('200 ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/count`)
        .expect(200);
      return result;
    });
  });

  describe(`GET ${ApiVer}/${Prefix}/userIp`, () => {
    it('200 get my ip ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/userIp`)
        .expect(200);
      return result;
    });
  });
});
