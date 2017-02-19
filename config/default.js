module.exports = {
    port: 1000,
    session: {
        secret: 'users',
        key: 'users',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/users'
};
