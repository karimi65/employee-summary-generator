// TODO: Write code to define and export the Engineer class.
const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Enginner";
    }
}

module.exports = Engineer
