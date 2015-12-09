import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: faker.random.uuid,

  title: faker.company.companyName,
  description: faker.lorem.paragraph,
  number: (i) => i,
  'commit-sha': faker.random.uuid,
  'commit-committer-name': faker.name.findName,
  state: () => Math.round(Math.random() * 4) - 1 // from 0 to 3
});
