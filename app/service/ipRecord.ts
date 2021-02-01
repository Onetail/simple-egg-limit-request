import { Service } from 'egg';
import { Op } from 'sequelize';
import * as moment from 'moment';

const IpRecordAttributes = ['id', 'loginIp', 'createdAt'];

export default class IpRecord extends Service {
  public async findAll({
    size,
    page,
    order,
    sort,
    search,
    startDate,
    endDate,
  }: {
    size: number;
    page: number;
    order: string;
    sort: string;
    search: string;
    startDate: Date;
    endDate: Date;
  }) {
    const data = await this.ctx.model.IpRecord.findAndCountAll({
      attributes: IpRecordAttributes,
      where: {
        [Op.and]: [
          {
            createdAt: { [Op.lte]: endDate, [Op.gte]: startDate },
            name: { [Op.substring]: search },
          },
        ],
      },
      limit: size,
      offset: size * page,
      order: [[order, sort]],
    });
    return data;
  }

  public async findIpCountByIp(loginIp: string) {
    const data = await this.ctx.model.IpRecord.count({
      attributes: IpRecordAttributes,
      where: {
        [Op.and]: [
          { loginIp },
          { createdAt: { [Op.gte]: moment().startOf('minute') } },
        ],
      },
    });
    return data;
  }

  public async createOneForIpRecord({ loginIp }: { loginIp: string }) {
    const data = await this.ctx.model.IpRecord.create({
      loginIp,
    });
    return data;
  }

  async deleteAllIpRecord() {
    return await this.ctx.model.IpRecord.destroy({ where: {} });
  }
}
