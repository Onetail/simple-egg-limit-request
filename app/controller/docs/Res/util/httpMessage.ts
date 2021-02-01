import * as httpStatus from './httpStatus';

export const successMsg = {
  success: {
    type: 'string',
    example: 'success',
    description: 'success',
  },
  NoContent: {
    type: 'string',
    example: '',
    description: '成功接收 不回傳任何訊息',
    status: 204,
  },
};

export const errorMsg = {
  failure: {
    type: 'string',
    example: 'failure',
    description: 'not description',
  },
  error: {
    type: 'string',
    example: 'error',
    description: 'not description',
  },
  4000: {
    type: 'string',
    example: 'Ip limit exceed connect times',
    description: 'ip requests 超過',
  },
};

export const successUpdateResponse = {
  type: 'object',
  properties: {
    status: httpStatus.successStatusResponse,
    msg: successMsg.success,
    body: {
      type: 'number',
      example: 1,
      description: '1 is changed , 0 is not changed',
    },
  },
};
