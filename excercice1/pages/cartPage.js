class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItemSelector = '.cart_item';
    }

    async verifyProductInCart(productName) {
        const cartItems = await this.page.locator(this.cartItemSelector).all();
        const itemNames = await Promise.all(cartItems.map(item => item.locator('.inventory_item_name').textContent()));
        return itemNames.includes(productName);
    }
}

module.exports = CartPage;
