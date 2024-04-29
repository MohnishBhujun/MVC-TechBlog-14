const User = require('./User.js');
const Post = require('./Post.js');
const Comment = require('./Comment.js');

User.hasMany(Post, {foreignKey: 'user_id'});
Post.belongsTo(User, {foreignKey: 'user_id', onDelete: 'CASCADE',onUpdate: 'CASCADE'});

User.hasMany(Comment, {foreignKey: 'user_id'});
Comment.belongsTo(User, {foreignKey: 'user_id', onDelete: 'CASCADE',onUpdate: 'CASCADE'});

Post.hasMany(Comment, {foreignKey: 'post_id'});
Comment.belongsTo(Post, {foreignKey: 'post_id', onDelete: 'CASCADE',onUpdate: 'CASCADE'});

module.exports = { User, Post, Comment };