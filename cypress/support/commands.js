import productPage from "./pageObjects/productPage";
import cartPage from "./pageObjects/cartPage";

Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('.hrefch').contains(productName).click()
})

Cypress.Commands.add('validateUrl', (url) => {
    cy.url().should('include', url);
})

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.selectProduct(productName);
    productPage.getAddToCartButton().click();
})

Cypress.Commands.add('fillOrderModal', (name, country, city, creditCard, month, year) => {
    cartPage.getFieldName().type(name);
    cartPage.getFieldCountry().type(country);
    cartPage.getFieldCity().type(city);
    cartPage.getFieldCreditCard().type(creditCard);
    cartPage.getFieldMonth().type(month);
    cartPage.getFieldYear().type(year);
})