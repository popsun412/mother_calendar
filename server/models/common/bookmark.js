module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'bookmark', 
        {
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            category: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            itemid: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING(40),
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