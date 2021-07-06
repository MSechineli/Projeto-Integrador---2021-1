const knexConnection = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./src/database/db.sqlite"
    },
    migrations: {
        directory: './src/database/migrations'
    },
});

module.exports = knexConnection;