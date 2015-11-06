var frisby = require('frisby');

frisby.create('Can access the endpoint for loading activities')
  .get('http://localhost:8000/api/load')
  .expectStatus(200)
.toss();

// Frisby is a piece of shit and doesn't support setup/teardown so the database
// changes end up bleeding over.

// frisby.create('Save endpoint has the proper JSON types')
//   .post('http://localhost:8000/api/save', {
//     date: 'November 1, 2015',
//     activities: [{
//       name: 'Hyung',
//       time: 15
//     }]
//   })
//   .expectJSONTypes({
//     date: String,
//     activities: Array
//   })
// .toss();
