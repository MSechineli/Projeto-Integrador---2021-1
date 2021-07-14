import knex from 'knex';
const configuration = require('../../knexfile');

export const connection = knex(configuration.development);