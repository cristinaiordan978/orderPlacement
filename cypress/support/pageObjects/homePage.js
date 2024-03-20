class HomePage {
    cartMenu() {
        return cy.get(':nth-child(4) > .nav-link').contains('Cart');
    }
}
export default new HomePage;