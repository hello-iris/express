module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    recipient_id: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.TEXT,
    },
  });

  Feedback.associate = (models) => {
    Feedback.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
  };
  
  return Feedback;
};