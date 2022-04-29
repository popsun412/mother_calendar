module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'categoryitem', 
        {
            category: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(200),
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
            location: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            area: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            age: {
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
};