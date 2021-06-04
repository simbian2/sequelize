const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill', {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skill_item',
        key: 'id'
      }
    },
    curr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'curriculum',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'skill',
    timestamps: false,
    indexes: [
      {
        name: "skillcurrid",
        using: "BTREE",
        fields: [
          { name: "curr_id" },
        ]
      },
      {
        name: "skillitemid",
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
