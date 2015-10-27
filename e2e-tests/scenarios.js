'use strict';

describe('Tang Soo Do Journal', function() {

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  describe('homepage', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });

    it('should render homepage when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial view for the homepage/);
    });

  });

});
