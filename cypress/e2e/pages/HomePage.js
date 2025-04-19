class HomePage {
    visit() {
        cy.visit('/');
    }

    searchProduct(searchKey) {
        cy.get('#search').should('be.visible').type(searchKey);
    }

    verifySearchResult(searchKey) {
        cy.get('#search_autocomplete li .qs-option-name').should('be.visible').each(($el, index) => {
            cy.wrap($el)
                .invoke('text')
                .then((text) => {
                    const actual = text.trim().toLowerCase();
                    expect(actual).to.include(searchKey.toLowerCase());
                });
        });
        cy.get('#search_autocomplete li .qs-option-name').should('be.visible').eq(0).click();
    }

}

export default new HomePage();