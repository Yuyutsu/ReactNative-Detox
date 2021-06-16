/* eslint-disable no-undef */
describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
  });

  it('should login after tap on login button', async () => {
    await element(by.id('username-input')).typeText('abc');
    await element(by.id('password-input')).typeText('12345');
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('welcome-to-home'))).toBeVisible();
  });
  
});
