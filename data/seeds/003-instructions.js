
exports.seed = async (knex) => {
  await knex('table_name').insert([
    { id: 1, name: 'rowValue1' },
    { id: 2, name: 'rowValue2' },
    { id: 3, name: 'rowValue3' }
  ]);
};
