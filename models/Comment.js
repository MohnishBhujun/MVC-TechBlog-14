const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {};

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    post_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'post',
            key: 'post_id',
        }

    },
    comment_text:{
        type: DataTypes.STRING,
        allowNull: false,
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
    modelName: 'comment',
});

module.exports = Comment;