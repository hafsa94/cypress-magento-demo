class LoginPage {
    visit() {
        cy.visit('/customer/account/login');
    }

    fillEmail(email) {
        cy.get('#email').type(email);
    }

    fillPassword(password) {
        cy.get('#pass').type(password);
    }

    clickSignInBtn() {
        cy.get('#send2').click();
    }
}

export default new LoginPage();