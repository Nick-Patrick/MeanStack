var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        db: 'mongodb://localhost/meanTut',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://npatrick:meantut@ds029187.mongolab.com:29187/meantut',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}