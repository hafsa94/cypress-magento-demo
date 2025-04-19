import RegistrationPage from '../pages/RegistrationPage';
import ProductListPage from '../pages/ProductListPage';
import CheckoutPage from '../pages/CheckoutPage';
import { faker } from '@faker-js/faker';

describe('Place Order From Cart', () => {
    beforeEach(() => {
        cy.fixture('userData.json').as('user');
    });

    it('Successfully Place Order From Cart', function () {
        const email = faker.internet.email();
        RegistrationPage.registerUser(this.user.firstName, this.user.lastName, email, this.user.password);
        ProductListPage.visit();
        ProductListPage.addProductsToCart();
        ProductListPage.goToCart();
        CheckoutPage.addShippingAddress(this.user.firstName, this.user.lastName, faker.location.streetAddress(), 'Montgomery', '36101', faker.phone.number());
        CheckoutPage.validateTotalCalculation();
        CheckoutPage.clickPlaceOrder();
        cy.contains('Thank you for your purchase!').should('be.visible');
    });
  });

