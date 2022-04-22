module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'hometheme', 
        {
            theme: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            title: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            tag1: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            tag2: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};