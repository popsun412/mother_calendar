module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'categoryplan', 
        {
            category: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            step: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            img: {
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