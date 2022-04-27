module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'feeddata', 
        {
            nickname: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            date: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            tag: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            type: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            target: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            title: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            contents: {
                type: DataTypes.STRING(500),
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