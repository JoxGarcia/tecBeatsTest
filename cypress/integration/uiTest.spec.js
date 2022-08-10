/// <reference types='Cypress' />

import { actions } from "../support/POM/saucedemoActions";

const dataFixture = require("../fixtures/dataFixture.json");
const { data, item, item_2 } = dataFixture;


describe("The Home Page", () => {

  beforeEach("Login to page", () => {
    cy.visit("/");
    actions.login(data);
  });

  it("Buying 1 backpack item", () => {
    actions.addToCart(item.object);
    actions.checkCartValue(item.qty);
    actions.clickOnShoppingCart();
    actions.checkCart(item);
    actions.clickOnCheckout();
    actions.fillCheckoutInformation(data);
    actions.checkoutOverview(item);
    actions.checkItemTotal("$28.99");
  });

  it("Buying 2 items, backpack and onesie", () => {
    actions.addToCart(item.object);
    actions.addToCart(item_2.object);
    actions.checkCartValue("2");
    actions.clickOnShoppingCart();
    actions.checkCart(item);
    actions.checkCart(item_2);
    actions.clickOnCheckout();
    actions.fillCheckoutInformation(data);
    actions.checkoutOverview(item);
    actions.checkoutOverview(item_2);
    actions.checkItemTotal("$37.98");
  });
});
