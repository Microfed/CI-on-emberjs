import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: faker.random.uuid,

  sha: faker.random.uuid,
  message: faker.lorem.paragraph,
  authorName: faker.name.findName,
  authorEmail: faker.internet.email,
  committerName: faker.name.findName,
  committerEmail: faker.internet.email,
  committedAt: faker.date.past
});
