const { Builder, By, Key } = require('selenium-webdriver');
var should = require('chai').should();
const { describe, it } = require('mocha');

//describe block
describe('add another todo test', function () {
  //it block
  it('successfully adds another a todo', async function () {
    //launch the browser

    let driver = await new Builder().forBrowser('firefox').build();

    //navigate to our application

    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    //add a todo
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('Selenium Testing 2', Key.RETURN);

    //assert
    //find the last element in the list and get its text
    let todoText = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai assertion
    todoText.should.equal('Selenium Testing 2');

    //close the browser
    await driver.quit();
  });

  it('Adding a new test for reporting', async function () {
    //launch the browser

    let driver = await new Builder().forBrowser('firefox').build();

    //navigate to our application

    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    //add a todo
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('Selenium Testing 2', Key.RETURN);

    //assert
    //find the last element in the list and get its text
    let todoText = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai assertion
    todoText.should.equal('Selenium Testing 3');

    //close the browser
    await driver.quit();
  });
});
