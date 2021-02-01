const handler = {
  ERR_NOT_AUTHORIZATION: {
    status: 401,
    message: 'No permission',
  },
  ERR_NOT_ALLOWED: {
    status: 403,
    message: 'Not allowed.',
  },
  ERR_NOT_FOUND: {
    status: 404,
    message: 'Not found.',
  },
  ERR_REQUEST_DATA: {
    status: 400,
    message: 'Bad request data.',
  },
  ERR_LIMIT_EXCEED: {
    status: 429,
    message:
      'This status code indicates that the client has exceeded some usage limit on the origin server.',
  },
};

export default {
  errorHandler(err, handlerMessage) {
    const result = handler[err];
    if (!result && !handlerMessage) {
      return {
        status: 500,
        message: err,
      };
    }

    if (!result) {
      return handler[handlerMessage];
    }

    result.message = handlerMessage;
    return result;
  },
  Error: {
    ERR_NOT_AUTHORIZATION: 'ERR_NOT_AUTHORIZATION',
    ERR_NOT_ALLOWED: 'ERR_NOT_ALLOWED',
    ERR_NOT_FOUND: 'ERR_NOT_FOUND',
    ERR_REQUEST_DATA: 'ERR_REQUEST_DATA',
    ERR_LIMIT_EXCEED: 'ERR_LIMIT_EXCEED',
  },
};
