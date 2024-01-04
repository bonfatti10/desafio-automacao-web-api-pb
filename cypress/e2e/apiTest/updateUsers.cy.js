import Ajv2019 from "ajv/dist/2019";
const ajv = new Ajv2019();
const draft7MetaSchema = require("ajv/dist/refs/json-schema-draft-07.json");
ajv.addMetaSchema(draft7MetaSchema);

import { faker } from "@faker-js/faker";

describe("PUT /users", () => {
  it("update a user", () => {
    cy.getUser().then((response) => {
      expect(response.status).to.eq(200);

      // Verifica se a resposta possui um corpo (body) e se o corpo é uma lista de usuários
      expect(response.body).to.be.an("array");

      // Obtém a lista de usuários do corpo da resposta
      const users = response.body.users;

      // Verifica se a lista de usuários não está vazia
      expect(response.body.length).to.be.greaterThan(0);

      // Escolhe aleatoriamente um índice da lista de usuários
      const randomIndex = Math.floor(Math.random() * response.body.length);

      // Obtém o ID do usuário no índice sorteado

      let id = response.body[randomIndex].id;

      // Agora você pode usar o ID sorteado conforme necessário
      cy.log(`Random User ID: ${id}`);

      const user = {
        nome: faker.person.firstName(),
        username: faker.person.lastName(),
        email: faker.internet.email(),
      };

      cy.api({
        url: `/users/${id}`, // Use o ID gerado anteriormente
        method: "PUT",
        body: user,
        failOnStatusCode: false,
      }).then((response) => {
        // Adicione aqui suas validações para a resposta da API
        expect(response.status).to.eql(200); // Verifica se a atualização foi bem-sucedida

        cy.fixture("updateSchema").then((schema) => {
          const validate = ajv.compile(schema);
          const isValid = validate(response.body);
          expect(isValid).to.be.true;
        });
      });
    });
  });
});
