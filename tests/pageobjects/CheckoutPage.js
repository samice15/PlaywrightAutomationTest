class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkOut = page.getByRole("link", { name: "CHECKOUT" });
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.getByRole("button", { name: "CONTINUE" });
    this.finishBtn = page.getByRole("link", { name: "FINISH" });
  }

  async checkoutPage() {
    await this.checkOut.click();
    await this.firstName.fill("Samiul");
    await this.lastName.fill("Haque");
    await this.postCode.fill("1230");
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}

module.exports = { CheckoutPage };
