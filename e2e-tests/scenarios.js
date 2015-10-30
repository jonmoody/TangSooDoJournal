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
      var elements = element.all(by.css('.class-activities-label'));

      expect(elements.count()).toEqual(9);
      expect(elements.get(0).getText()).toEqual('Hyung');
      expect(elements.get(1).getText()).toEqual('Line Drill');
      expect(elements.get(2).getText()).toEqual('Sparring');
      expect(elements.get(3).getText()).toEqual('Targeting');
      expect(elements.get(4).getText()).toEqual('Hand One Steps');
      expect(elements.get(5).getText()).toEqual('Kick One Steps');
      expect(elements.get(6).getText()).toEqual('Ho Sin Sul');
      expect(elements.get(7).getText()).toEqual('Hyung Applications');
      expect(elements.get(8).getText()).toEqual('Weapons');
    });

    it('should increase the time of the class activity when the increase time button is clicked', function() {
      var increaseTimeButton = element.all(by.css('.increase-time-button')).get(0);
      var timeText = element.all(by.css('.time-text')).get(0);

      expect(timeText.getText()).toEqual('0');
      increaseTimeButton.click();

      expect(timeText.getText()).toEqual('15');
    });

    it('should decrease the time of the class activity when the decrease time button is clicked', function() {
      var decreaseTimeButton = element.all(by.css('.decrease-time-button')).get(0);
      var increaseTimeButton = element.all(by.css('.increase-time-button')).get(0);
      var timeText = element.all(by.css('.time-text')).get(0);

      increaseTimeButton.click();
      increaseTimeButton.click();
      expect(timeText.getText()).toEqual('30');

      decreaseTimeButton.click();

      expect(timeText.getText()).toEqual('15');
    });

  });

});
