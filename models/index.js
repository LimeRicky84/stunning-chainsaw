const User = require('./User');
const Resume = require('./Resume')
const Employer = require('./Employer')
const Education = require('./Education')


User.hasMany(Resume, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Resume.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Employer, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Employer.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Education, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Education.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Resume, Education, Employer };