import LoginPage from "../pageobjects/login.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    // await LoginPage.regis(
    //   "Fahlevi Sobariya",
    //   "fahlevisobariya10@gmail.com",
    //   "Pass@word1"
    // );

    await LoginPage.login("fahlevisobariya10@gmail.com", "Pass@word1");
  });
});
