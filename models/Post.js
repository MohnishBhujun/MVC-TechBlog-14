const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {};

Post.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.TEXT,
        allowNull: false

    },contents:{
        type: DataTypes.TEXT,
        allowNull: false

    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'user',
            key: 'user_id',
        }
    },
    created_date:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
});

module.exports = Post;