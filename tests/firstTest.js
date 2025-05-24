const { Builder, By, Key } = require('selenium-webdriver');

async function example() {
  //launch the browser

  let driver = await new Builder().forBrowser('firefox').build();

  //navigate to our application

  await driver.get('https://lambdatest.github.io/sample-todo-app/');

  //add a todo
  await driver
    .findElement(By.id('sampletodotext'))
    .sendKeys('Selenium Testing 1', Key.RETURN);

  //close the browser
  await driver.quit();
}

example();
