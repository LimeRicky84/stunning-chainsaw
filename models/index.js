const User = require('./User');
const Resume = require('./Resume')
const Template = require('./Template')

User.hasMany(Resume, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Resume.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Template, {
    foreignKey: 'user_id'
});

Template.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Resume, Template };