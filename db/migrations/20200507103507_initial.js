const Knex = require('knex');

/**
 * @param {knex} Knex
 */

exports.up = async function (knex) {
  await knex.schema.createTable('tiktok', (tbl) => {
    tbl.increments().notNullable();
    tbl.string('url', 255).notNullable();
    tbl.datetime('added').defaultTo(knex.fn.now(6));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('tiktok');
};
