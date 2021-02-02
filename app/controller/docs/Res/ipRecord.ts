const IpRecordRO = {
  id: {
    type: 'number',
    example: 1,
    description: 'Platform setting id',
  },
  loginIp: {
    type: 'string',
    example: '127.0.0.1',
    description: 'login ip',
  },
  createdAt: {
    type: 'Date',
    example: '2021-02-01T15:06:04.143Z',
    description: '創建時間',
  },
  updatedAt: {
    type: 'Date',
    example: '2021-02-01T15:06:04.143Z',
    description: '更新時間',
  },
};

export const PostIpRecordResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        ...IpRecordRO,
      },
    },
  },
};

export const GetIpRecordLimitCountResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        count: {
          type: 'number',
          example: 60,
          description: '當前分鐘計數',
        },
      },
    },
  },
};

export const GetUserIpResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        ip: {
          type: 'string',
          example: '127.0.0.1',
          description: 'user ip',
        },
      },
    },
  },
};
