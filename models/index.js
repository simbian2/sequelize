'use strict';

const Sequelize = require('sequelize');
const initModels = require('./init-models')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const User = require('./image');
const image = User.image1;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.image1 = image;
image.init(sequelize);

let models = initModels(sequelize)
console.log(models)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.curriculum = models.curriculum;
db.skill_item = models.skill_item;
db.skill = models.skill;

console.log(db.skill)
module.exports = db;
