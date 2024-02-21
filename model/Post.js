const mongoose = require('mongoose');

const PostModel = {
    post: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: true
    },
    date: {
        type: String,
        required: true
    },

}

const Post = mongoose.model('Post', PostModel);

module.exports = Post
