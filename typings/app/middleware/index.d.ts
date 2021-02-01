// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportValidateIpRecord from '../../../app/middleware/validateIpRecord';

declare module 'egg' {
  interface IMiddleware {
    validateIpRecord: typeof ExportValidateIpRecord;
  }
}
