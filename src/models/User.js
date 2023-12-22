const Model = require('pseudb');

class User extends Model
{
    static table = 'user';

    static fillable = [
        'name',
        'age'
    ];
}

User.initialize();
module.exports = User;