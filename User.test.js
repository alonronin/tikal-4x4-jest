const mockingoose = require('mockingoose').default;
const User = require('./User');

describe('Testing Models', () => {
  it('should create document', () => {
    mockingoose.User.toReturn({ name: 'Alon' }, 'save');

    return User.create({ name: 'Alon' })
      .then(_doc => {
        console.log(_doc.toObject());

        expect(_doc.toObject()).toMatchObject({ name: 'Alon' });
        expect(_doc.toObject()).toHaveProperty('_id');
      })
  })
});
