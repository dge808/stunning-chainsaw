import { DOGS_LIST } from "../../mocks/dogsApi";

describe("The Dogs List Page", () => {
  it("successfully loads", () => {
    cy.intercept("/dogs", DOGS_LIST)
      .visit("http://localhost:3000")
      .get("h1")
      .contains("Friends list");
  });
});
