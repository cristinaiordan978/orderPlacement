class Cart {
    
    getPlaceOrderButton() {
        return cy.get('.btn-success').contains('Place Order');
    }

    getOrderModal() {
        return cy.get('#orderModalLabel');
    }

    getOrderSuccessfulMessage() {
        return cy.get('.sweet-alert');
    } 

    getConfirmButton() {
        return cy.get('.confirm');
    }

    getPurchaseButton() {
        return cy.contains('button', 'Purchase');
    }

    getFieldName() {
        return cy.get('#name');
    }

    getFieldCountry() {
        return cy.get('#country');
    }

    getFieldCity() {
        return cy.get('#city');
    }

    getFieldCreditCard() {
        return cy.get('#card');
    }

    getFieldMonth() {
        return cy.get('#month');
    }

    getFieldYear() {
        return cy.get('#year');
    }
}
export default new Cart();