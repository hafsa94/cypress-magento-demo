import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';

describe('Search Product', () => {

    it('Search Product And Validate the Results', () => {
        HomePage.visit();
        HomePage.searchProduct('Jacket');
        HomePage.verifySearchResult('Jacket');
        ProductListPage.verifySearchResultInProductsPage('Jacket');
    });
});

