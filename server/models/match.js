module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    match_id: {
      type: DataTypes.INTEGER,
    },
    outcome: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    outcome_timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    }, 
    opt_out_timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Match.associate = (models) => {
    Match.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
    Match.hasOne(models.Date, {
      onDelete: 'CASCADE',
    });
  };

  return Match;
};