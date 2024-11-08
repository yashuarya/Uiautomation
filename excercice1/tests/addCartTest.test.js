const { chromium } = require('playwright');
const LoginPage = require('../pages/loginpage'); 
const ProductsPage = require('../pages/productsPage'); 
const CartPage = require('../pages/cartPage'); 
const { writeToFile } = require('../utils/fileUtils'); 

describe('SauceDemo Add to Cart Test', () => {
    let browser;
    let context;
    let page;

    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });

    it('should add product to cart', async () => {
        await page.goto('https://www.saucedemo.com');
        const loginPage = new LoginPage(page);
        await loginPage.login(username, password);

        const productsPage = new ProductsPage(page);
        const productDetails = await productsPage.getFirstProductDetails();
        writeToFile('product.txt', `Name: ${productDetails.name}, Price: ${productDetails.price}`);

        await productsPage.addFirstProductToCart();
        await productsPage.navigateToCart();

        const cartPage = new CartPage(page);
        const isProductInCart = await cartPage.verifyProductInCart(productDetails.name);

        expect(isProductInCart).toBe(true);
    });
});
