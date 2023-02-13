export class Login {
    navigate() {
        cy.visit('https://www.saucedemo.com/');
    }

    title() {
        cy.title("eq", "Swag Labs");
    }

    username() {
        cy.get('#user-name').type('standard_user');
    }

    password() {
        cy.get('#password').type('secret_sauce');
    }

    login() {
        cy.get('#login-button').click();
    }
}