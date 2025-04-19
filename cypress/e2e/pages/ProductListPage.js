class ProductListPage {
    visit() {
        cy.visit('/women/tops-women.html');
    }

    addProductsToCart() {
        cy.get('.product-item').each(($el, index, $list) => {
            if (index < 2) {
                const productName = $el.find('.product.name a').text().trim();
                cy.wrap($el).find('[aria-label="Size"] div').eq(0).click();
                cy.wrap($el).find('[aria-label="Color"] div').eq(0).click();
                cy.wrap($el).find('button[title="Add to Cart"]').click({ force: true });
                cy.contains(`You added ${productName} to your shopping cart.`).should('be.visible');
            }
        });
    }

    addProductsToWishlist() {
        let count = 0;
        while (count < 2) {
            cy.get('.product-item').find('a[title="Add to Wish List"]').eq(count).click({ force: true });
            cy.contains('has been added to your Wish List. Click here to continue shopping.', { timeout: 10000 }).should('be.visible');
            this.visit();
            count += 1;
        }
    }

    addProductsFromWishlistToCart() {
        cy.get('a[title="Go to Wish List"]').click();
        let count = 2;
        while (count > 0) {
            cy.get('.product-item').find('.product-item-actions .edit').eq(0).click({ force: true });
            cy.get('.size .swatch-option').eq(0).should('be.visible').click();
            cy.get('.color .swatch-option').eq(0).should('be.visible').click();
            cy.get('#product-addtocart-button span').scrollIntoView().should('be.visible').click();
            count -= 1;
        }
        cy.contains('You have no items in your wish list.').should('be.visible');
    }

    goToCart() {
        // cy.get('a.showcart').should('be.enabled');
        cy.get('a.showcart', { timeout: 10000 }).should('be.visible').click();
        cy.get('#mini-cart').should('be.visible');
        cy.get('#top-cart-btn-checkout').should('be.visible').click()
    }

    verifySearchResultInProductsPage(searchKey) {
        cy.get('.product.name a').should('be.visible').each(($el, index) => {
            cy.wrap($el)
                .invoke('text')
                .then((text) => {
                    const actual = text.trim().toLowerCase();
                    expect(actual).to.include(searchKey.toLowerCase());
                });
        });
    }
}

export default new ProductListPage();