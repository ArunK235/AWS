const Sequelize= require('sequelize');
const sequelize = require('../util/database');
const Expense = sequelize.define('expense', {
    id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true
      },
      chooseexpensive : Sequelize.INTEGER,
      choosetheater: {
        type: Sequelize.STRING,
        
      },
      choosemovie:{
        type: Sequelize.STRING,
      },

});
module.exports=Expense;