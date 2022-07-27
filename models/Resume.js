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
            allowNull: false,
        },
        experience: {
            type: DataTypes.TEXT,
            allowNull: true,    
        },
        education: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        skills: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        certifications: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        contact_info: {
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