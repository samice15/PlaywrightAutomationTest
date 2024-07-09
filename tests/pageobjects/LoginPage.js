class LoginPage {
  constructor(page) {
    this.page = page;
    this.logInbutton = page.getByRole("button", { name: "LOGIN" });
    this.userName = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
  }

  async goTo() {
    await this.page.goto("https://www.saucedemo.com/v1/");
  }

  async validLogin(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.logInbutton.click();
  }
}
module.exports = { LoginPage };
