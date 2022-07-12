const { Sequelize } = require("sequelize");

const Book = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      page_quantity: DataTypes.INTEGER,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      page_quantity: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
        underscored: true,
        tableName: 'Books',
    });
  
    return Book;
  };
  
  module.exports = Book;