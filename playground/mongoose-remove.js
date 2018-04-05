const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

/* // Removes all
Todo.remove({}).then((result) => {
    console.log(result);
});

// Removes first found element
Todo.findOneAndRemove().then((result) => {
    console.log(result);
});
 */

 // Removes specific doc
Todo.findByIdAndRemove('5ac5d752e6b9ec41162f5698').then((result) => {
    console.log(result);
});

