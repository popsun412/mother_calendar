module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'maplist', 
        {
            date: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            rate: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(100),
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
            lat: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            lng: {
                type: DataTypes.INTEGER,
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