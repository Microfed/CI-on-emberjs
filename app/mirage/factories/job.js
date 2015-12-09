import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: faker.random.uuid,

  number: (i) => i,
  logId: faker.random.uuid,
  committerName: faker.name.findName,
  state: () => Math.round(Math.random() * 4) - 1, // from 0 to 3
  type: () => Math.round(Math.random() * 3) - 1 // from 0 to 2
});
