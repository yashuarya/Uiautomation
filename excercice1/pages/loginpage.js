class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[id="user-name"]';
        this.passwordInput = 'input[id="password"]';
        this.loginButton = 'input[id="login-button"]';
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;
