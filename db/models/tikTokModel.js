const db = require('../dbConfig');

module.exports = {
  getById,
};

function getById(id) {
  return db('tiktok').select().where({ id }).first();
}
