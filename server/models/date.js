module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define('Date', {
    url: {
      type: DataTypes.STRING,
    }, 
    sent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Date.associate = (models) => {
    Date.hasOne(models.Match, {
      onDelete: 'CASCADE',
    });
  };

  return Date;
};