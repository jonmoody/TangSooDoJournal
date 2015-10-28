'use strict';

describe('Tang Soo Do Journal', function() {

  it('should automatically redirect to /journal when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  describe('homepage', function() {

    beforeEach(function() {
      browser.get('index.html#/journal');
    });

    it('should render the journal page when user navigates to /journal', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Tang Soo Do Journal/);
    });

  });

});
