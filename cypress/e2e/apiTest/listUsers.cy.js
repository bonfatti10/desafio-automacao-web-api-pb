import Ajv2019 from "ajv/dist/2019";
const ajv = new Ajv2019();
const draft7MetaSchema = require("ajv/dist/refs/json-schema-draft-07.json");
ajv.addMetaSchema(draft7MetaSchema);

describe("GET /users", () => {
  it("list users", () => {
    cy.getUser().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.above(0);
      cy.fixture("listSchema").then((schema) => {
        const validate = ajv.compile(schema);
        const isValid = validate(response.body);
        expect(isValid).to.be.true;
      });
    });
  });
});
