class ProductsPage {
    constructor(page) {
        this.page = page;
        this.firstProductNameSelector = '.inventory_item_name';
        this.firstProductPriceSelector = '.inventory_item_price';
        this.addToCartButton = '.btn_inventory';
        this.cartLink = '.shopping_cart_link';
    }

    async getFirstProductDetails() {
        const name = await this.page.textContent(this.firstProductNameSelector);
        const price = await this.page.textContent(this.firstProductPriceSelector);
        return { name, price };
    }

    async addFirstProductToCart() {
        await this.page.click(this.addToCartButton);
    }

    async navigateToCart() {
        await this.page.click(this.cartLink);
    }
}

module.exports = ProductsPage;
