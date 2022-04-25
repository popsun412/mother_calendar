module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'confirm', 
        {
            date: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            people: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            username: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            tag: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            rate: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            favourite: {
                type: DataTypes.BOOLEAN,
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