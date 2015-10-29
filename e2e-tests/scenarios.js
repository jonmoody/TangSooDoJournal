'use strict';

describe('Tang Soo Do Journal', function() {

  it('should automatically redirect to /journal when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  describe('journal page', function() {

    beforeEach(function() {
      browser.get('index.html#/journal');
    });

    it('should render the journal page when user navigates to /journal', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Buckeye Tang Soo Do Journal/);
    });

    it('should display the list of class activities', function() {
      expect(element.all(by.repeater('activity in journal.getClassActivities()')).count()).toEqual(9);
    });

  });

});
