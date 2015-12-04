import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
   title: faker.company.companyName,
   description: faker.lorem.paragraph,
   id: faker.random.uuid
});
