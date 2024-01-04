import Ajv2019 from "ajv/dist/2019";
const ajv = new Ajv2019();
const draft7MetaSchema = require("ajv/dist/refs/json-schema-draft-07.json");
ajv.addMetaSchema(draft7MetaSchema);

import { faker } from "@faker-js/faker";

describe("PUT /users", () => {
  it("update a user", () => {
    cy.getUser().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
      const randomIndex = Math.floor(Math.random() * response.body.length);
      let id = response.body[randomIndex].id;
      const user = {
        nome: faker.person.firstName(),
        username: faker.person.lastName(),
        email: faker.internet.email(),
      };

      cy.api({
        url: `/users/${id}`,
        method: "PUT",
        body: user,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eql(200);
        cy.fixture("updateSchema").then((schema) => {
          const validate = ajv.compile(schema);
          const isValid = validate(response.body);
          expect(isValid).to.be.true;
        });
      });
    });
  });
});
