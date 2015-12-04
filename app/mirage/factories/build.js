import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: faker.random.uuid,

  title: faker.company.companyName,
  description: faker.lorem.paragraph,

  project_id: null,
  commit: null,
  jobs: () => [],

  number: (i) => i
});
