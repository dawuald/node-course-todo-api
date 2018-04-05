const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    })
});

var hashedPassword = '$2a$10$CENy09CcxGsyqkor2/BrBeae8qr7rn7/Q/tHQOAFA80NZ0PrCilE6';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');

// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);


// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 6;
// //token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log("Data unchanged");
// } else {
//     console.log("Data changed");
// }

