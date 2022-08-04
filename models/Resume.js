const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resume extends Model { }

Resume.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tagline: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        linkedin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        interests1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        interests2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        interests3: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        // current photo???

        careerSummary: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // Education

        college1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        graduated1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        college2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        graduated2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },



        // Work history form 1 


        jobTitle1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        started1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        left1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        jobDescription1: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        achievements1: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        //     // Second work history form 
        jobTitle2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        started2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        left2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        jobDescription2: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        achievements2: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        //     // Third work history form 
        jobTitle3: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        started3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        left3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        jobDescription3: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        achievements3: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        // Coding languages

        lang1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lang2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },  
        lang3: {
            type: DataTypes.TEXT,
            allowNull: true,
        },  
        lang4: {
            type: DataTypes.TEXT,
            allowNull: true,
        },  
        lang5: {
            type: DataTypes.TEXT,
            allowNull: true,
        },  
        lang6: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


        // Projects
        projectName1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        projectLink1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        projectDescript1: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        projectName2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        projectLink2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        projectDescript2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        projectName3: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        projectLink3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        projectDescript3: {
            type: DataTypes.STRING,
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