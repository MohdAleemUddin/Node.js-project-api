const bunyan = require("bunyan");
const path = require("path");
const filePath = path.join(__dirname, "..", "logs", "app.log");
let logger = bunyan.createLogger({
  name: "Aleem",
  streams: [
    {
      path: filePath,
    },
  ],
});
module.exports = logger;
