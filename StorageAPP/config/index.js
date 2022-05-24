require("dotenv").config()

const config = {
    name: process.env.NAME 
}

console.log(config.name);

module.exports = config