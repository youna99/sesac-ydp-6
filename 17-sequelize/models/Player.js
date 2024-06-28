// Player 모델 정의
const playerModel = (sequelize, DataTypes) => {
    // sequelize 매개 변수: models/index.js에서 sequelize(db 연결 정보를 입력하여 생성한 객체)
    // DataTypes 매개 변수: models/index.js에서 Sequelize(sequelize 패키지 자체)

    const Player = sequelize.define(
        // param1: 모델 이름 설정
        'Player', 
        // param2: 모델 컬럼 정의
        {
            player_id: {
                // playter_id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                // name varchar(63) not null
                type: DataTypes.STRING(63),
                allowNull: false,
            },
            age: {
                // age int not null
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        // param3: 모델 옵션 정의
        {
            freezeTableName: true, // 테이블명 고정 (기본이 복수형이라 그거 안하겠다는 의미)
            // timestamps: false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록(을 안쓸것이다.)
        }
    );

    return Player;
};

module.exports = playerModel;