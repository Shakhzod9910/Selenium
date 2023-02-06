const {Builder, By, Key} = require('selenium-webdriver');

require("chromedriver");

(async function firstTest() {

  let driver = await new Builder().forBrowser('chrome').build();

  // Setting the address

  await driver.get('https://pastebin.com/');

  // Specifying and selecting values

  await driver.findElement(By.id("postform-text")).sendKeys("Hello from WebDriver")

  await driver.findElement(By.css(".field-postform-expiration")).click(Key.RETURN);

  await driver.findElement(By.css(".select2-results__options li:nth-child(3)")).click(Key.RETURN);

  await driver.findElement(By.id("postform-name")).sendKeys("helloweb")
 
  // await driver.quit();

})();