// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApi from '../../../app/controller/api';
import ExportIpCacheRecord from '../../../app/controller/ipCacheRecord';
import ExportIpRecord from '../../../app/controller/ipRecord';
import ExportEnumIpRecord from '../../../app/controller/enum/ipRecord';
import ExportDocsResIpRecord from '../../../app/controller/docs/Res/ipRecord';
import ExportDocsResUtilHttpMessage from '../../../app/controller/docs/Res/util/httpMessage';
import ExportDocsResUtilHttpStatus from '../../../app/controller/docs/Res/util/httpStatus';

declare module 'egg' {
  interface IController {
    api: ExportApi;
    ipCacheRecord: ExportIpCacheRecord;
    ipRecord: ExportIpRecord;
    enum: {
      ipRecord: ExportEnumIpRecord;
    }
    docs: {
      res: {
        ipRecord: ExportDocsResIpRecord;
        util: {
          httpMessage: ExportDocsResUtilHttpMessage;
          httpStatus: ExportDocsResUtilHttpStatus;
        }
      }
    }
  }
}
