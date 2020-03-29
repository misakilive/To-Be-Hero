const knex = require('knex');
const configuration = require('../../knexfile');

// Verifica se está em ambiente de teste ou produção
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;