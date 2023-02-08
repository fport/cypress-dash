/* eslint-disable */

const IDDAA_URL = "https://www.iddaa.com/";

describe("Homepage-tests-web", () => {
  before(() => {
    cy.viewport("iphone-x");

    cy.visit(IDDAA_URL, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
      },
    });
  });

  beforeEach(() => {
    const popup = cy.get('[aria-label="Kapat"]', { timeout: 1000 });
    popup.click({ force: true, multiple: true });
  });

  it("should open iddaa.com home page", () => {
    const url = cy.url();
    url.should("eq", IDDAA_URL);
  });
});
