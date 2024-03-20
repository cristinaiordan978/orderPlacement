/// <reference types="cypress" />
import productPage from "../../support/pageObjects/productPage";
import productNames from "../../fixtures/products.json";
import orderInfo from "../../fixtures/orderModalInformation.json";
import textStrings from "../../support/textStrings";
import homePage from "../../support/pageObjects/homePage";
import cartPage from "../../support/pageObjects/cartPage";

context('Validate order payment process', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Can add product to cart', () => {
    cy.selectProduct(productNames.iPhone);
    cy.validateUrl(textStrings.URLs.product);
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });
    productPage.getAddToCartButton().click();
    cy.get('@alertStub').should('be.calledWith', textStrings.alertMessages.productAdded);
  });

  it('Can place order for product', () => {
    cy.addProductToCart(productNames.iPhone);
    homePage.cartMenu().click();
    cartPage.getPlaceOrderButton().click();
    cartPage.getOrderModal().should('be.visible');
    cy.fillOrderModal(orderInfo.name, orderInfo.country, orderInfo.city, orderInfo.creditCard, orderInfo.month, orderInfo.year);
    cartPage.getPurchaseButton().click();
    cartPage.getOrderSuccessfulMessage().contains(textStrings.alertMessages.orderSuccessful);
    cartPage.getConfirmButton().click();
    cartPage.getOrderModal().should('not.be.visible');
  });
})
