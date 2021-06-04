const Sequelize = require('sequelize'); // class 

class image1 extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            image:{
                type:Sequelize.STRING(100),
                allowNull:false, // NOT NULL 
                unique:true
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'image',
            tableName:'image',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}



module.exports = {
    image1,
}