const {Builder, By,Key} = require('selenium-webdriver');
const assert = require('assert');
var should = require('chai').should();
// import { Should } from 'chai';

async function example(){

    //launch the browser

    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application

    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium Testing",Key.RETURN);

    //assert
    //find the last element in the list and get its text
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value;
    })
    //assert using node assertion
    // assert.strictEqual(todoText,"Selenium Testing");

    //assert using chai assertion
    todoText.should.equal("Selenium Testing");

    //close the browser
    await driver.quit();
}

example()