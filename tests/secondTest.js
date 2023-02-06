const {Builder, By, Key} = require('selenium-webdriver');
const assert = require ("assert")
require("chromedriver");

(async function firstTest() {

  let driver = await new Builder().forBrowser('chrome').build();

  // Setting the addres

  await driver.get('https://pastebin.com');

  // Specifying and selecting values

  await driver.findElement(By.id("postform-text")).sendKeys(`git config --global user.name "New Sheriff in Town"
git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
git push origin master --force`)

  await driver.findElement(By.xpath("//*[@id='w0']/div[5]/div[1]/div[3]")).click(Key.RETURN);

  await driver.findElement(By.xpath("/html/body/span[2]/span/span[1]/input")).sendKeys("Bash",Key.RETURN)

  await driver.findElement(By.css(".field-postform-expiration")).click(Key.RETURN);

  await driver.findElement(By.css(".select2-results__options li:nth-child(3)")).click(Key.RETURN);

  await driver.findElement(By.id("postform-name")).sendKeys("how to gain dominance among developers")

  // Save values

  await driver.findElement(By.css(".form-btn-container button")).click(Key.RETURN);

  // Check values

  let newPaste = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/h1")).getText().then(function(value){
      return value
    })
  assert.strictEqual(newPaste,"how to gain dominance among developers");

  let syntax = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]")).getText().then(function(value){
    return value
  })
  assert.strictEqual(syntax,"Bash")

  let newCode = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol/li[2]/div")).getText().then(function(value){
    return value
  })
  assert.strictEqual(newCode,'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")')

  // Close the browser
  
  await driver.quit();

})();