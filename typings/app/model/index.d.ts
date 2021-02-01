// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIpRecord from '../../../app/model/ipRecord';

declare module 'egg' {
  interface IModel {
    IpRecord: ReturnType<typeof ExportIpRecord>;
  }
}
