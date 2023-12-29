const { describe } = require("mocha");
import { faker }  from '@faker-js/faker';

describe( 'GET /users', ()=> {
  it('list users', ()=> {
    cy.request({
      url: '/users',
      method: 'GET',
    })
  })
});

describe( 'POST /users', ()=> {
  it('register a new user', ()=> {
    const userFaker = {
      nome: faker.person.firstName(),
      username:faker.person.lastName(),
      email: faker.internet.email(),
    };

    cy.request({
      url: '/users',
      method: 'POST',
      body: userFaker
    })
  })
});

describe( 'PUT /users', ()=> {
    it('update a new user', ()=> {
      const userId = 11
      const userFaker = {
        nome: faker.person.firstName(),
        username:faker.person.lastName(),
        email: faker.internet.email()
      }
      cy.request({
        url: `/users/${userId}`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: userFaker,
        failOnStatusCode: false
      })
    })
});

describe( 'Delete/users', ()=> {
  it('delete a user', ()=> {
    const userId = 11
    cy.request({
      url: `/users/${userId}`,
      method: 'DELETE',
    })
  })
});
