// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product',
  onDelete: 'CASCADE',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product',
})
// Products belongToMany Tags (through ProductTag)
ProductTag.belongToMany(Tag, {
  foreignKey: 'product',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongtoMany(ProductTag, {
  foreignKey: 'product',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
