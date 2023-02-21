const moongose = require('mongoose');

moongose.connect('mongodb://localhost/crud-express-mongo', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));