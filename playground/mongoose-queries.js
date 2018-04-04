const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '6ac4b662141476372217742e';

// Todo.find({_id: id}).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({_id: id}).then((todo) => {
//     console.log('Todo', todo)
// });

// if(!ObjectID.isValid(id)){
//     console.log(`Id '${id}' not valid`);
//     return; 
// }

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('No entry found')
//     }
//     console.log('Todo', todo)
// }).catch((e) => console.log("Error occured"));


id = '5ac49d28143c8c57178b436e';

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log('Error'));

