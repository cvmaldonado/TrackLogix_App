// selenium-setup.ts

import { WebDriver, Builder } from 'selenium-webdriver';
import { Options as SafariOptions } from 'selenium-webdriver/safari';

let driver: WebDriver;

export async function setupWebDriver() {
    try {
        const options = new SafariOptions();

        driver = await new Builder()
            .forBrowser('safari')
            .setSafariOptions(options)
            .build();
        
        console.log('WebDriver configurado correctamente.');
    } catch (error) {
        console.error('Error al configurar el WebDriver:', error);
    }
}

export async function quitWebDriver() {
    try {
        if (driver) {
            await driver.quit();
            console.log('WebDriver cerrado correctamente.');
        }
    } catch (error) {
        console.error('Error al cerrar el WebDriver:', error);
    }
}
