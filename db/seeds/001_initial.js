exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('tiktok').del();
  //inserts
  await knex('tiktok').insert([
    { id: 1, url: 'google.com/1' },
    { id: 2, url: 'google.com/2' },
    { id: 3, url: 'google.com/3' },
    { id: 4, url: 'google.com/4' },
    { id: 5, url: 'google.com/5' },
  ]);
};
