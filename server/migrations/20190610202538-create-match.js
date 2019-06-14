module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match_id: {
        type: Sequelize.INTEGER,
      },
      outcome: {
        type: Sequelize.BOOLEAN,
      },
      outcome_timestamp: {
        type: Sequelize.DATE,
      },
      opt_out_timestamp: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'user_id',
        },
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Matches'),
};