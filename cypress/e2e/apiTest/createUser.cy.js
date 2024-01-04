import Ajv2019 from "ajv/dist/2019";
const ajv = new Ajv2019();
const draft7MetaSchema = require("ajv/dist/refs/json-schema-draft-07.json");
ajv.addMetaSchema(draft7MetaSchema);
import { faker } from "@faker-js/faker";

describe("POST /users", () => {
    it("register a new user", () => {
      const userFaker = {
        nome: faker.person.firstName(),
        username: faker.person.lastName(),
        email: faker.internet.email(),
      };
  
      cy.api({
        url: "/users",
        method: "POST",
        body: userFaker,
      }).then((response) => {
        expect(response.status).to.eq(201); // Verifica se o usuário foi criado com sucesso
        expect(response.body).to.have.property("id"); // Verifica se o usuário tem um ID
      });
    });
  });