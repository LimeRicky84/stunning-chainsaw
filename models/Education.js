const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Education extends Model {}

Education.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        school: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        graduate: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        certificate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'education',
    }
)

module.exports = Education;