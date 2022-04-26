module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'sample1',
        {
            category: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            step: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            korean: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            science: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
}