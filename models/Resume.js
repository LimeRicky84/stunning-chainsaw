const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resume extends Model {}

Resume.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: true,    
        },
        skills: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        interests: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        certifications: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'resume',
    }
)

module.exports = Resume;