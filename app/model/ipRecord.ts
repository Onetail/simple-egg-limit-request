module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const IpRecord = app.model.define('ipRecords', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    loginIp: STRING(128),
    createdAt: {
      allowNull: false,
      defaultValue: app.Sequelize.NOW,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: app.Sequelize.NOW,
      type: DATE,
    },
  });

  return IpRecord;
};
