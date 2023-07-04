const path = require("path");

// returns path to a parent directory
module.exports = path.dirname(require.main.filename);
