
import { setupWebDriver, quitWebDriver } from './selenium-setup';
import { WebDriver, By, Builder } from 'selenium-webdriver';

describe('Pruebas automatizadas de inicio de sesión', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    await setupWebDriver();
    driver = await getDriver();
  });

  afterAll(async () => {
    await quitWebDriver();
  });

  it('inicia sesión con credenciales válidas', async () => {
    await driver.get('URL de tu página de inicio de sesión');

    await driver.findElement(By.css('#mail')).sendKeys('usuario');
    await driver.findElement(By.css('#password')).sendKeys('contraseña');

    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(() => driver.getCurrentUrl().then(url => url.includes('dashboard')), 5000);

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toContain('dashboard');
  });

  it('error de credenciales inválidas', async () => {
    await driver.get('http://localhost:8100/login');

    await driver.findElement(By.css('#mail')).sendKeys('usuario_invalido');
    await driver.findElement(By.css('#password')).sendKeys('contraseña_invalida');

    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(() => driver.findElement(By.css('.error-message')).isDisplayed(), 5000);

    const errorMessage = await driver.findElement(By.css('.error-message')).getText();
    expect(errorMessage).toEqual('Credenciales inválidas. Por favor, inténtalo de nuevo.');
  });

});

async function getDriver() {
  return new Builder().forBrowser('safari').build();
}

