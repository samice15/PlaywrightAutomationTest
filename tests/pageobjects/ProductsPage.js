const { expect } = require("@playwright/test");

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productItem = page.locator("#inventory_container > div > div:nth-child(1) > div.pricebar > button");
    this.addtoItem = page.locator("#shopping_cart_container");
    this.verifyItem = page.locator("#item_4_title_link > div");
  }

  async addToProduct() {
    await this.productItem.click();
    await this.addtoItem.click();
  }

  async verifyCartProduct() {
    const bool = await this.verifyItem.isVisible();
    expect(bool).toBeTruthy();
    console.log(bool);
  }
}

module.exports = { ProductsPage };
