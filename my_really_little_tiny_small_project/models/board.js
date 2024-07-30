module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('board', {
    board_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    board_writer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    board_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    board_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    freezeTableName: true,
    paranoid: true,  // 소프트 삭제 활성화
    });

  Board.associate = (models) => {
    Board.belongsTo(models.Member, {
      foreignKey: 'board_writer',
      targetKey: 'member_id',
      onDelete: 'CASCADE'
    });
  };

  // 소프트 삭제 시 is_active를 false로 설정하는 훅 추가
  Board.addHook('beforeDestroy', async (board, options) => {
    await board.update({ is_active: false });
  });

  return Board;
};