import { Controller } from 'egg';
import { TagsAll, Prefix, Post, Get, Responses } from 'egg-shell-decorators';
import 'moment-timezone';
import {
  GetIpRecordLimitCountResponse,
  PostIpRecordResponse,
} from './docs/Res/ipRecord';
import { errorMsg } from './docs/Res/util/httpMessage';
import { IpRecordMaxLimit } from './enum/ipRecord';

@TagsAll('ipRecord')
@Prefix('ipRecord')
export default class IpRecordController extends Controller {
  @Post('/')
  @Responses({
    200: {
      description: '登入成功',
      schema: {
        ...PostIpRecordResponse,
      },
    },
    429: {
      description: errorMsg[4000].description,
      schema: errorMsg[4000],
    },
  })
  public async postIpRecord() {
    const { ctx } = this;
    const ipExceedLimit = await ctx.service.ipRecord.findIpCountByIp(
      ctx.request.ip,
    );
    if (ipExceedLimit >= IpRecordMaxLimit) {
      throw ctx.app.errorHandler(
        ctx.app.Error.ERR_LIMIT_EXCEED,
        errorMsg[4000].example,
      );
    }
    const result = await ctx.service.ipRecord.createOneForIpRecord({
      loginIp: ctx.request.ip,
    });
    ctx.body = {
      body: result,
    };
  }

  @Get('/count')
  @Responses({
    200: {
      description: '登入成功',
      schema: {
        ...GetIpRecordLimitCountResponse,
      },
    },
  })
  public async getIpRecordByIpCount() {
    const { ctx } = this;
    const result = await ctx.service.ipRecord.findIpCountByIp(ctx.request.ip);
    ctx.body = {
      body: { count: result },
    };
  }

  @Get('/userIp')
  @Responses({
    200: {
      description: '登入成功',
      schema: {
        ...GetIpRecordLimitCountResponse,
      },
    },
  })
  public async getUserIp() {
    const { ctx } = this;

    ctx.body = {
      body: { ip: ctx.request.ip },
    };
  }
}
