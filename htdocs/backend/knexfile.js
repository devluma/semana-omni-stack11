require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/db.sqlite',
    },
    migrations: {
      directory: './database/migrations',
    },
    useNullAsDefault: true,
    asyncStackTraces: process.env.APP_DEBUG || false,
    debug: process.env.APP_DEBUG || false,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.sqlite',
    },
    migrations: {
      directory: './database/migrations',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
