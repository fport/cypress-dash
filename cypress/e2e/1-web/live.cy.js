describe("Live-tests-web", () => {
    before(() => {
        cy.viewport(1920, 1080);
    })

    beforeEach(() => {
        cy.visit("/");

        const popup = cy.get('[aria-label="Kapat"]', {timeout: 1000});
        popup.click({force: true, multiple: true});

        cy.get('[data-comp-name="mainMenu-live-button"]').click();
    });

    it("should open iddaa.com live page from home", () => {
        cy.url().should("include", "/program/canli");
    });

    it("should filter live football", () => {
        const accordionFutbolMenu = cy.get('[data-comp-name="accordionMenu-futbol"]')
        accordionFutbolMenu.should("exist")
            .click()

        cy.wait(200)

        cy.url().should("include", "/program/canli/futbol");
    });

    it("should filter live basketball", () => {
        const accordionFutbolMenu = cy.get('[data-comp-name="accordionMenu-basketbol"]')
        accordionFutbolMenu.should("exist")
            .click()

        cy.wait(200)

        cy.url().should("include", "/program/canli/basketbol");
    });

    it("should filter live volleyball", () => {
        const accordionFutbolMenu = cy.get('[data-comp-name="accordionMenu-voleybol"]')
        accordionFutbolMenu.should("exist")
            .click()

        cy.wait(200)

        cy.url().should("include", "/program/canli/voleybol");
    });

    it("should filter live buz-hokeyi", () => {
        const accordionFutbolMenu = cy.get('[data-comp-name="accordionMenu-buz-hokeyi"]')
        accordionFutbolMenu.should("exist")
            .click()

        cy.wait(200)

        cy.url().should("include", "/program/canli/buz-hokeyi");
    });
})