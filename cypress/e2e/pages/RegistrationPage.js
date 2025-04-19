class RegistrationPage {
    visit() {
        cy.visit('/customer/account/create');
    }

    fillFirstName(firstName) {
        cy.get('#firstname').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#lastname').type(lastName);
    }

    fillEmail(email) {
        cy.get('#email_address').type(email);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    fillConfirmPassword(password) {
        cy.get('#password-confirmation').type(password);
    }

    clickCreateAnAccountBtn() {
        cy.get('button').contains('Create an Account').click();
    }

    registerUser(firstName, lastName, email, password) {
        this.visit();
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email)
        this.fillPassword(password);
        this.fillConfirmPassword(password);
        this.clickCreateAnAccountBtn();
    }
}

export default new RegistrationPage();