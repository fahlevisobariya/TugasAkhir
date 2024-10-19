import { $ } from "@wdio/globals";
import Page from "./page.js";

class LoginPage extends Page {
  // PAGE LOGIN

  get inputUsername() {
    return $("#email");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get toRegister() {
    return $("*=ingin mencoba, daftar ?");
  }
  // PAGE LOGIN

  // PAGE REGISTER
  get inputnameregis() {
    return $("#name");
  }

  get inputemailregis() {
    return $("#email");
  }

  get inputpassregis() {
    return $("#password");
  }

  get btnRegis() {
    return $("*=daftar");
  }
  // PAGE REGISTER

  async regis(nama, email, pass) {
    await this.toRegister.click();
    await this.inputnameregis.setValue(nama);
    await this.inputemailregis.setValue(email);
    await this.inputpassregis.setValue(pass);
    await this.btnSubmit.click();
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
