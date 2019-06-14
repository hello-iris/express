module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    }, 
    age: {
      type: DataTypes.INTEGER,
    }, 
    preference: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    }, 
    cancelled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,

    },
    date_cancelled: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Match, {
      foreignKey: 'user_id',
      as: 'user_id',
    });
    User.hasMany(models.Feedback, {
      foreignKey: 'user_id',
      as: 'user_id'
    });
  };
  return User;
};