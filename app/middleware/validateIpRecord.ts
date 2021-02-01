import { Context } from 'egg';

export function validateIpRecordPostBody(): any {
  return async (ctx: Context) => {
    try {
    } catch (err) {
      throw ctx.app.errorHandler(ctx.app.Error.ERR_REQUEST_DATA, err);
    }
  };
}
