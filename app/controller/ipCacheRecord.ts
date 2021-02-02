// import { Controller } from 'egg';
// import { TagsAll, Prefix, Post, Get, Responses } from 'egg-shell-decorators';
// import 'moment-timezone';
// import { GetIpRecordLimitCountResponse } from './docs/Res/ipRecord';
// import { errorMsg } from './docs/Res/util/httpMessage';
// import { IpRecordMaxLimit } from './enum/ipRecord';
// import { successStatusResponse } from './docs/Res/util/httpStatus';

// @TagsAll('ipCacheRecord')
// @Prefix('ipCacheRecord')
// export default class ipCacheRecordController extends Controller {
//   @Post('/')
//   @Responses({
//     200: {
//       description: '登入成功',
//       schema: {
//         ...successStatusResponse,
//       },
//     },
//     429: {
//       description: errorMsg[4000].description,
//       schema: errorMsg[4000],
//     },
//   })
//   public async postIpRecord() {
//     const { ctx } = this;
//     const ipCount = await this.app.redis.get(ctx.request.ip);
//     console.log('\x1b[32m', '\n---- Debug ----\n');
//     console.log('\x1b[36m', `ipCount = `, ipCount);
//     console.log('\x1b[32m', '\n---------------', '\x1b[0m');
//     if (parseInt(ipCount) >= IpRecordMaxLimit) {
//       throw ctx.app.errorHandler(
//         ctx.app.Error.ERR_LIMIT_EXCEED,
//         errorMsg[4000].example,
//       );
//     }
//     const result = await ctx.service.ipRecord.createOneForIpRecord({
//       loginIp: ctx.request.ip,
//     });
//     ctx.body = {
//       body: result,
//     };
//   }

//   @Get('/count')
//   @Responses({
//     200: {
//       description: '登入成功',
//       schema: {
//         ...GetIpRecordLimitCountResponse,
//       },
//     },
//   })
//   public async getIpRecordByIpCount() {
//     const { ctx } = this;
//     const result = await ctx.service.ipRecord.findIpCountByIp(ctx.request.ip);
//     ctx.body = {
//       body: { count: result },
//     };
//   }

//   @Get('/userIp')
//   @Responses({
//     200: {
//       description: '登入成功',
//       schema: {
//         ...GetIpRecordLimitCountResponse,
//       },
//     },
//   })
//   public async getUserIp() {
//     const { ctx } = this;

//     ctx.body = {
//       body: { ip: ctx.request.ip },
//     };
//   }
// }
