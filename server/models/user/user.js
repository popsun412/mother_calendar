module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'user', 
        {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            nickname: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            gender: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING(15),
                allowNull: false
            },
            address: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};