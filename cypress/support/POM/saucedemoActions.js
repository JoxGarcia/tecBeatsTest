/// <reference types= "Cypress"/>
class saucedemoActions {
  login(data) {
    cy.get("[data-test=username]").type(data.username);
    cy.get("[data-test=password]").type(data.password);
    cy.get("[data-test=login-button]").click();
  }

  addToCart(item) {
    cy.get(`[data-test=add-to-cart-sauce-labs-${item}]`).click();
  }

  clickOnShoppingCart() {
    cy.get(".shopping_cart_link").click();
  }

  clickOnCheckout() {
    cy.get("[data-test=checkout]").click();
  }

  fillCheckoutInformation(data) {
    cy.get("[data-test=firstName]").type(data.firstName);
    cy.get("[data-test=lastName]").type(data.lastName);
    cy.get("[data-test=postalCode]").type(data.postalCode);
    cy.get("[data-test=continue]").click();
  }

  setQty(qty) {}

  checkoutOverview(data) {
    cy.get(".cart_quantity").should("contain", data.qty);
    cy.get(".inventory_item_price").should("contain", data.price);
  }

  checkItemTotal(value) {
    cy.get(".summary_subtotal_label").should("contain", value);
    cy.get('[data-test=finish]').click();
    cy.get('.complete-header').should("contain", "THANK YOU FOR YOUR ORDER");
  }
}

export const actions = new saucedemoActions();