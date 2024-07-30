module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
    member_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    member_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true
    },
    member_password: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    paranoid: true,
    hooks: {
      beforeDestroy: async (member, options) => {
        await member.deactivate();
      }
    }
  });

  Member.associate = (models) => {
    Member.hasMany(models.Board, {
      foreignKey: 'board_writer',
      sourceKey: 'member_id'
    });
  };

  Member.prototype.deactivate = async function() {
    await this.update({ is_active: false });
    const boards = await this.getBoards();
    await Promise.all(boards.map(board => board.update({ is_active: false })));
  };

  return Member;
};