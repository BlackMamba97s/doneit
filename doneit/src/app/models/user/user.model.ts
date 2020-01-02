export class User {

    constructor(private username,
        private password) { }

    getUsername() {
        return this.username
    }

    getPassword() {
        return this.password
    }

    setPassword(password) {
        this.password = password;
    }

    setUsername(username) {
        this.username = username;
    }

}
