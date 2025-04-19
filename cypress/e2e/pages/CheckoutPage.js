class CheckoutPage {
    visit() {
        cy.visit('/checkout');
    }

    addShippingAddress(firstName, lastName, street, city, postcode, telephone) {
        cy.get('[name="firstname"]', { timeout: 10000 }).should('be.visible').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[name="street[0]"]').type(street);
        cy.get('[name="city"]').type(city);
        cy.get('[name="postcode"]').type(postcode);
        cy.get('[name="country_id"]').select("United States");
        cy.get('[name="region_id"]').select("Alabama");
        cy.get('[name="telephone"]').type(telephone);
        cy.get('#checkout-shipping-method-load .radio').eq(0).click();
        cy.get('button').contains('Next').click();
    }

    getPrice(selector) {
        return cy.get(selector).invoke('text').then((text) => {
            return parseFloat(text.replace('$', '').trim());
        });
    }

    validateTotalCalculation() {
        this.getPrice('.sub .price').then((subtotal) => {
            this.getPrice('.shipping .price').then((shipping) => {
                const expectedTotal = (subtotal + shipping).toFixed(2);
                this.getPrice('.grand .price').then((grand) => {
                    expect(grand.toFixed(2)).to.eq(expectedTotal);
                });
            });
        });

    }

    clickPlaceOrder() {
        cy.get('button').contains('Place Order').click();
    }
}

export default new CheckoutPage();