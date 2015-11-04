var frisby = require('frisby');

frisby.create('Can access the endpoint for loading activities')
  .get('http://localhost:8000/api/load')
  .expectStatus(200)
.toss();
