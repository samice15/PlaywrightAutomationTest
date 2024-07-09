const { test, expect } = require("@playwright/test");
const { LoginPage } = require("./pageobjects/LoginPage");
const { ProductsPage } = require("./pageobjects/ProductsPage");
const { CheckoutPage } = require("./pageobjects/CheckoutPage");

test("SwagLabs log-in, product select and checkout", async ({ page }) => {
  // Log-in Page

  const email = "standard_user";
  const password = "secret_sauce";
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);
  loginPage.validLogin(email, password);
  await loginPage.goTo();

  // add to cart item
  await productsPage.addToProduct();

  // Verify the correct product is added to the cart
  await productsPage.verifyCartProduct();

  // Checkout page
  await checkoutPage.checkoutPage();
});
