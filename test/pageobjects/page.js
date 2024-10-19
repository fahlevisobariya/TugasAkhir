import { browser } from "@wdio/globals";

export default class Page {
  open(path) {
    // return browser.url(`https://kasirdemo.belajarqa.com/${path}`);
    return browser.url(`https://kasirdemo.vercel.app/${path}`);
  }
}
