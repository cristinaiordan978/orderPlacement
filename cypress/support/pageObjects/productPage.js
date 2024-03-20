class ProductPage {
    getAddToCartButton() {
        return cy.contains('Add to cart');
    };
}

export default new ProductPage();