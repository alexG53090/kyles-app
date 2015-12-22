exports.seed = function(knex, Promise){
  return knex.('kyle').del().then(function(){
    return Promise.all([
      knex('kyle_table').insert([
        name: 'Alex',
        coolness: 10,
        alive: 'true',
      ]),
    ])
  })
}
