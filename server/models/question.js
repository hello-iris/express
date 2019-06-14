module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    content: {
      type: DataTypes.TEXT
    }
  }, {});
  Question.associate = (models) => {
    Question.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
  };
  return Question;
};