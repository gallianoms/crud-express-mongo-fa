const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: Boolean
    }
});

module.exports = model('tasks', taskSchema);
