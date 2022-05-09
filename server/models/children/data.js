module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'children', 
        {
            mom: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            birth: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            gender: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(100),
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