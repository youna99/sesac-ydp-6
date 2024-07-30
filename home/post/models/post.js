// Post 모델 정의
const postModel = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        // id int not null primary key
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        // title VARCHAR(100) NOT NULL
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      content: {
        // content text NOT NULL
        type: DataTypes.TEXT,
        allowNull: false,
      },
      writer: {
        // writer VARCHAR(50) NOT NULL
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false, // 타임스탬프 비활성화
    }
  );
  return Post;
};

module.exports = postModel;
