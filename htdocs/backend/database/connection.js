/* eslint-disable no-console */
const knex = require('knex');
const knexfile = require('../knexfile');

const { NODE_ENV, APP_DEBUG } = process.env;
const env = NODE_ENV || 'development';
const debug = JSON.parse(APP_DEBUG) || false;

if ((env === 'development' || env === 'test') && debug === true) {
  console.log(`Environment is ${env}`);
}

const configOptions = knexfile[env];

module.exports = knex(configOptions);
