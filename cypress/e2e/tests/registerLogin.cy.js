import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import { faker } from '@faker-js/faker';


describe('Registration and Login', () => {
    beforeEach(() => {
        cy.fixture('userData.json').as('user');
    });

    it('Registration and Login With Valid Credentials', function () {
        RegistrationPage.visit();
        RegistrationPage.fillFirstName(this.user.firstName);
        RegistrationPage.fillLastName(this.user.lastName);
        let email = faker.internet.email();
        RegistrationPage.fillEmail(email);
        RegistrationPage.fillPassword(this.user.password);
        RegistrationPage.fillConfirmPassword(this.user.password);
        RegistrationPage.clickCreateAnAccountBtn();
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
        cy.contains(this.user.firstName + ' ' + this.user.lastName).should('be.visible');
        cy.contains(email).should('be.visible');;
    });
});

