import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: faker.random.uuid,

  title: faker.company.companyName,
  description: faker.lorem.paragraph,
  'started-at': faker.date.recent,
  number: (i) => ( Math.round(Math.random() * 1000000) + i ),
  'commit-sha': faker.random.uuid,
  'commit-committer-name': faker.name.firstName,
  state: () => ( Math.round(Math.random() * 3) )  // from 0 to 3
});
