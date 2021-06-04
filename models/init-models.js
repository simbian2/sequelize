var DataTypes = require("sequelize").DataTypes;
var _curriculum = require("./curriculum");
var _skill = require("./skill");
var _skill_item = require("./skill_item");

function initModels(sequelize) {
  var curriculum = _curriculum(sequelize, DataTypes);
  var skill = _skill(sequelize, DataTypes);
  var skill_item = _skill_item(sequelize, DataTypes);

  skill.removeAttribute('id')
  skill.belongsTo(curriculum, { as: "curr", foreignKey: "curr_id"});
  curriculum.hasMany(skill, { as: "skills", foreignKey: "curr_id"});
  skill.belongsTo(skill_item, { as: "item", foreignKey: "item_id"});
  skill_item.hasMany(skill, { as: "skills", foreignKey: "item_id"});

  return {
    curriculum,
    skill,
    skill_item,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
