import { app, mock } from 'egg-mock/bootstrap';

const ApiVer = 'api/v1';
const Prefix = 'ipRecord';

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

    it('401 no permission', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .set('authorization', `Bearer ${userToken}`)
        .expect(401);
      return result;
    });

    it('400 query error', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .set('authorization', `Bearer ${adminToken}`)
        .query({
          page: 'a1',
          size: 10,
          sort: 'DESC',
        })
        .expect(400);
      return result;
    });

    it('200 no query ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .set('authorization', `Bearer ${adminToken}`)
        .expect(200);
      return result;
    });

    it('200 query ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .set('authorization', `Bearer ${adminToken}`)
        .query({
          page: 1,
          size: 10,
          startDate: '2020-01-01 11:11:11',
          sort: 'DESC',
        })
        .expect(200);
      return result;
    });
  });

  describe(`GET ${ApiVer}/${Prefix}/:attachmentId`, () => {
    it('404 not found ', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/99999`)
        .expect(404);

      return result;
    });
    it('400 attachmentId error ', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/test`)
        .expect(400);

      return result;
    });
    it('200 image ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/${imgId}`)
        .expect(200);

      return result;
    });

    it('200 file ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/${fileId}`)
        .expect(200);

      return result;
    });
  });
});
