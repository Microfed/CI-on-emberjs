import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: faker.random.uuid,

  number: (i) => i,
  logId: faker.random.uuid,
  committerName: faker.name.findName
});
