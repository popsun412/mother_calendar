'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
    {
        define: {
            charset: 'utf8', collate: 'utf8_general_ci'
        }
    }
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.log('Unable to connect to the database : ', err);
    });

db.Sample1 = require('./sample1')(sequelize, Sequelize);

// Common
db.Bookmark = require('./common/bookmark')(sequelize, Sequelize);

// Home
db.HomeMain = require('./home/main')(sequelize, Sequelize);
db.HomeItem = require('./home/item')(sequelize, Sequelize);
db.HomePlace = require('./home/place')(sequelize, Sequelize);
db.HomeTheme = require('./home/theme')(sequelize, Sequelize);

// Category
db.CategoryItem = require('./category/item')(sequelize, Sequelize);
db.CategoryPlan = require('./category/plan')(sequelize, Sequelize);

db.User = require('./user/user')(sequelize, Sequelize);

// Confirm
db.Confirm = require('./confirm/confirm')(sequelize, Sequelize);

// Experience
db.Experience = require('./experience/list')(sequelize, Sequelize);

// Parents
db.Parents = require('./parents/data')(sequelize, Sequelize);

// Etc
db.Etc = require('./etc/data')(sequelize, Sequelize);

// Feed
db.Feed = require('./feed/data')(sequelize, Sequelize);

db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
module.exports = db;