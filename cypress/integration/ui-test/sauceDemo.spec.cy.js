// cypress/integration/sauceDemo.spec.js
import SauceDemoPage from '../../pageObject/sauceDemoPage';
import LoginPage from '../../pageObject/loginPage';
import {LOGIN_USERS} from '../../fixture/credentials'

const sortOptionAZ = 'Name (A to Z)';
const sortOptionZA = 'Name (Z to A)';

describe('Sauce Demo UI Test with POM', () => {
  beforeEach(() => {
    LoginPage.visit('https://www.saucedemo.com');
    LoginPage.login(LOGIN_USERS.STANDARD, LOGIN_USERS.PASSWORD);
  });

  it('should verify items are sorted by Name (A -> Z)', () => {
    SauceDemoPage.isCurrentSortOption(sortOptionAZ);
    SauceDemoPage.verifyProductsSortedInAtoZOrder();
  });

  it('should verify items are sorted by Name (Z -> A)', () => {
    SauceDemoPage.selectSortOption('za');
    SauceDemoPage.isCurrentSortOption(sortOptionZA);
    SauceDemoPage.verifyProductsSortedInZtoAOrder();
  });
});
