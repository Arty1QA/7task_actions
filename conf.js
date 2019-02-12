exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  Capabilities: {
    'browserName': 'chrome'
  }, 
  onPrepare: function() {
  browser.manage().window().setSize(1600, 1000);
}
  };