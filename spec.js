// spec.js
var LoginComponent = require('./loginComponent');

describe('Mentoring', function() {

  beforeAll(function () {

      LoginComponent.get();
      LoginComponent.setName('test');
      LoginComponent.passwordInput('test');
      LoginComponent.button();
      browser.ignoreSynchronization = false;
  });

  it('Should check, that login is successfull', function() {
    browser.actions().mouseMove(element(by.className('fa fa-lg fa-dashboard'))).perform()
      .then(function () { // mouse action
        return browser.sleep(3000); // freeze to demonstrate action result
      }).then(function () {
        return browser.findElement(by.className('fa fa-lg fa-search')).click();
      }).then(function () {
        return browser.findElement(by.id('fileNumber')).sendKeys('Push enter in 3 seconds');
      }).then(function () {
        return browser.sleep(3000);
      }).then (function () {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform() // keyboard action
      }).then(function () {
        return browser.sleep(3000);
      }).then(function () {
        return browser.executeScript("arguments[0].click()",element(by.className('fa fa-times'))); // JS executer action
      }).then(function () {
        return browser.sleep(3000);
      }).then(function () {
        return browser.executeScript("document.getElementById('fileName').value='by JS Ex'"); // JS executer action
      }).then(function () {
        return browser.sleep(3000);
      });
  });

});
