/// <reference types='Cypress' />

import { actions } from "../support/POM/saucedemoActions";

describe("The Home Page", () => {
  let data = {
    username: "standard_user",
    password: "secret_sauce",
    firstName: "Jose",
    lastName: "Garcia",
    postalCode: "01015",
  };
  beforeEach("Login to page", () => {
    cy.visit("/");
    actions.login(data);
  });

  it("Buying 1 backpack item", () => {
    let item = {
      object: "backpack",
      price: "$29.99",
      qty: "1"
    };

    actions.addToCart(item.object);
    actions.clickOnShoppingCart();
    actions.clickOnCheckout();
    actions.fillCheckoutInformation(data);
    actions.checkoutOverview(item);
    actions.checkItemTotal("$29.99");

  });

  it("Buying 2 items", () => {
    let item = {
      object: "backpack",
      price: "$29.99",
      qty: "1",
    };

    let item_2 = {
      object: "onesie",
      price: "$7.99",
      qty: "1",
    };

    actions.addToCart(item.object);
    actions.addToCart(item_2.object);
    actions.clickOnShoppingCart();
    actions.clickOnCheckout();
    actions.fillCheckoutInformation(data);
    actions.checkoutOverview(item);
    actions.checkoutOverview(item_2);
    actions.checkItemTotal("$37.98");
  });
});
