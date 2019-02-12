var LoginComponent = function () {
    var nameImput = element(by.name('UserName'));
    var passwordInput = element(by.name('Password'));
    var buttonClick = element(by.className('loginBtn'));
    var currentUser = element(By.xpath('//*[@id="ir-user-config-button"]/span'));
    
    this.get = function () {
        browser.ignoreSynchronization = true; 
        return browser.get('https://testenv.com/');  
      
    };
    
    this.setName = function(name){
        return nameImput.sendKeys(name);
    };
    
    this.passwordInput = function(password){
    return passwordInput.sendKeys(password);
    };
    
    this.button = function(){
    return buttonClick.click();
    };
    
    this.verifyUser = function(){
    return currentUser.getText();
    };
    };
    
    module.exports = new LoginComponent();
